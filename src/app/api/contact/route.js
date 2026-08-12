import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({

            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "srsabbirrahman12@gmail.com",

            replyTo: email,

            subject: `New message from ${name}`,
            text: `From: ${name} (${email})\n\n${message}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, "<br/>")}</p>
                </div>
            `,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, id: data.id });
    } catch (err) {
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}