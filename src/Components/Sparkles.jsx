"use client";

export default function Sparkles() {
  const stars = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 animate-pulse rounded-full bg-cyan-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random(),
            animationDuration: `${2 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}