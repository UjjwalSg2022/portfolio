const Decorations = () => {
  return (
    <>
      {/* Main Orbital Ring */}
      <div
        className="
        fixed
        top-[-250px]
        right-[-250px]
        w-[900px]
        h-[900px]
        rounded-full
        border
        border-white/[0.08]
        animate-[spin_80s_linear_infinite]
        pointer-events-none
        "
      />

      {/* Secondary Ring */}
      <div
        className="
        fixed
        top-[120px]
        right-[120px]
        w-[500px]
        h-[500px]
        rounded-full
        border
        border-white/[0.06]
        animate-[spin_50s_linear_infinite_reverse]
        pointer-events-none
        "
      />

      {/* Bottom Left Ring */}
      <div
        className="
        fixed
        bottom-[-150px]
        left-[-150px]
        w-[650px]
        h-[650px]
        rounded-full
        border
        border-white/[0.08]
        animate-[spin_100s_linear_infinite]
        pointer-events-none
        "
      />

      {/* Accent Ring */}
      <div
        className="
        fixed
        bottom-[15%]
        left-[8%]
        w-[180px]
        h-[180px]
        rounded-full
        border
        border-white/[0.06]
        pointer-events-none
        "
      />

      {/* Tiny Accent Ring */}
      <div
        className="
        fixed
        top-[25%]
        right-[10%]
        w-[120px]
        h-[120px]
        rounded-full
        border
        border-white/[0.06]
        pointer-events-none
        "
      />

      {/* Grid Background */}
      <div
  className="fixed inset-0 pointer-events-none opacity-[0.06]"
  style={{
    backgroundImage:
      "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
  }}
/>

      {/* Film Grain */}
      <div
        className="
        fixed
        inset-0
        opacity-[0.03]
        mix-blend-soft-light
        pointer-events-none
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />
    </>
  );
};

export default Decorations;