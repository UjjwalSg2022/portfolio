const Experience = () => {
  return (
    <section
      id="experience"
      className="
      py-32
      border-t
      border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* SECTION HEADER */}

        <div className="mb-20">

          <p className="text-zinc-500 uppercase tracking-[0.4em] text-sm mb-6">
            Experience
          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            tracking-tight
            "
          >
            Professional Experience
          </h2>

        </div>

        {/* EXPERIENCE CARD */}

        <div
          className="
          border
          border-white/10
          bg-white/[0.02]
          backdrop-blur-xl
          rounded-3xl
          p-8
          lg:p-12
          "
        >

          <div
            className="
            flex
            flex-col
            lg:flex-row
            lg:items-start
            lg:justify-between
            gap-6
            "
          >

            <div>

              <h3
                className="
                text-3xl
                font-semibold
                "
              >
                Full Stack Developer 
              </h3>

              <p
                className="
                text-zinc-400
                mt-3
                text-lg
                "
              >
                MAC International
              </p>

            </div>

            <div
              className="
              text-zinc-500
              border
              border-white/10
              px-5
              py-2
              rounded-full
              w-fit
              "
            >
              Mar 2026 — Present
            </div>

          </div>

          <div
            className="
            mt-10
            max-w-4xl
            "
          >

            <p
              className="
              text-zinc-400
              leading-relaxed
              text-lg
              "
            >
              Contributing to the development of
              premium business websites, modern user
              interfaces and scalable web solutions.
              Working closely with frontend technologies,
              responsive design systems and production-ready
              development workflows to deliver high-quality
              digital experiences.
            </p>

          </div>

          <div className="mt-10">

            <h4 className="font-semibold mb-6">
                Key Contributions
            </h4>

            <div className="grid md:grid-cols-2 gap-4">

                {[
                "Developed responsive business websites",
                "Built reusable React components",
                "Implemented modern UI/UX layouts",
                "Optimized mobile responsiveness",
                "Collaborated on production-ready projects",
                "Maintained scalable frontend architecture",
                ].map((item) => (
                <div
                    key={item}
                    className="
                    border
                    border-white/10
                    rounded-xl
                    px-5
                    py-4
                    text-zinc-300
                    "
                >
                    ✓ {item}
                </div>
                ))}

            </div>

            </div>

          {/* RESPONSIBILITIES */}

          <div
            className="
            mt-12
            grid
            md:grid-cols-2
            gap-6
            "
          >

            <div
              className="
              border
              border-white/10
              rounded-2xl
              p-6
              "
            >
              <h4 className="font-semibold mb-3">
                Frontend Development
              </h4>

              <p className="text-zinc-400">
                Built responsive interfaces and
                interactive user experiences using
                modern frontend technologies.
              </p>
            </div>

            <div
              className="
              border
              border-white/10
              rounded-2xl
              p-6
              "
            >
              <h4 className="font-semibold mb-3">
                UI/UX Implementation
              </h4>

              <p className="text-zinc-400">
                Developed premium layouts, reusable
                components and optimized user journeys.
              </p>
            </div>

          </div>

          {/* TECH STACK */}

          <div
            className="
            flex
            flex-wrap
            gap-3
            mt-12
            "
          >

            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Git",
              "GitHub",
              "Postman",
            ].map((tech) => (
              <span
                key={tech}
                className="
                px-4
                py-2
                border
                border-white/10
                rounded-full
                text-sm
                text-zinc-300
                "
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;