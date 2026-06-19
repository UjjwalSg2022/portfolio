const Hero = () => {
  return (
    <section className="px-6 lg:px-20 pt-10 lg:pt-16 pb-20 lg:pb-32 min-h-[70vh] lg:min-h-0">

      {/* DESKTOP */}
      <div className="hidden lg:block">

        <div className="grid lg:grid-cols-12 gap-10">

          <div className="lg:col-span-8">

            <div className="text-zinc-500 text-sm mb-8">
              FULL STACK DEVELOPER
            </div>

            <h1
              className="
              text-[170px]
              leading-[0.9]
              font-bold
              tracking-[-0.05em]
              "
            >
              Full-stack
            </h1>

          </div>

          <div className="lg:col-span-4 flex items-end">

            <p className="text-zinc-400 leading-relaxed max-w-sm">
              I build scalable web applications,
              interactive user experiences and
              production-ready digital products
              using the MERN stack.
            </p>

          </div>

        </div>

        <div className="mt-2">

          <h1
            className="
            text-[170px]
            leading-[0.9]
            font-bold
            tracking-[-0.05em]
            text-right
            "
          >
            Developer
          </h1>

        </div>

      </div>

      {/* MOBILE */}
      <div className="lg:hidden">

        <div className="text-zinc-500 text-xs tracking-[0.15em] mb-6">
          FULL STACK DEVELOPER
        </div>

        <h1
          className="
          text-[56px]
          font-bold
          leading-[0.9]
          tracking-[-0.05em]
          "
        >
          Full-stack
        </h1>

        <h1
          className="
          text-[56px]
          font-bold
          leading-[0.9]
          tracking-[-0.05em]
          mb-8
          "
        >
          Developer
        </h1>

        <div
        className="
        text-zinc-400
        leading-relaxed
        max-w-xs
        "
        >
        <p>
            I build scalable web applications
            and high-performance digital
            products using the MERN stack.
        </p>

        <p className="mt-4">
        Combining intuitive user experiences with robust backend architecture,
        I develop secure, scalable, and production-ready solutions optimized
        for performance, maintainability, and long-term business success.
        </p>
        </div>

      </div>

    </section>
  );
};

export default Hero;