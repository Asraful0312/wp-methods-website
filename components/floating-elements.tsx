"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-primary/15 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-primary/10 rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Floating squares */}
      <div className="absolute top-60 left-1/4 w-8 h-8 bg-primary/20 rotate-45 animate-bounce-slow" />
      <div
        className="absolute top-80 right-1/3 w-6 h-6 bg-primary/30 rotate-45 animate-bounce-slow"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-xl animate-pulse-slow" />
      <div
        className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-l from-primary/15 to-transparent rounded-full blur-xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}
