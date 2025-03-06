const FloatingBubbles = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary color bubbles */}
      <div className="absolute w-64 h-64 rounded-full bg-primary/10 -top-20 left-1/4 animate-float-slow"></div>
      <div className="absolute w-40 h-40 rounded-full bg-primary/15 bottom-1/3 -right-10 animate-float"></div>

      {/* Secondary color bubbles */}
      <div className="absolute w-52 h-52 rounded-full bg-secondary/10 top-1/3 -left-20 animate-float-medium"></div>
      <div className="absolute w-32 h-32 rounded-full bg-secondary/15 bottom-1/4 right-1/4 animate-float-slow"></div>

      {/* Accent color bubbles */}
      <div className="absolute w-48 h-48 rounded-full bg-accent/10 top-2/3 right-10 animate-float"></div>
      <div className="absolute w-36 h-36 rounded-full bg-accent/15 top-1/4 right-1/3 animate-float-medium"></div>

      {/* Additional bubbles */}
      <div className="absolute w-24 h-24 rounded-full bg-primary/20 bottom-10 left-10 animate-float-slow"></div>
      <div className="absolute w-20 h-20 rounded-full bg-secondary/20 top-1/2 left-1/2 animate-float"></div>
    </div>
  )
}

export default FloatingBubbles

