const About = () => {
  return (
    <section
      id="about"
      className="
      border-t
      border-white/10
      py-24
      lg:py-32
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* SECTION LABEL */}

        <div className="mb-20">
          <p className="text-zinc-500 uppercase tracking-[0.4em] text-sm">
            About Me
          </p>
        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT */}

          <div className="lg:col-span-7">

            <h2
              className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-tight
              tracking-tight
              "
            >
              Building Digital
              <br />
              Experiences That
              <br />
              Create Impact.
            </h2>

            <p
              className="
              mt-10
              text-zinc-400
              text-lg
              leading-relaxed
              max-w-2xl
              "
            >
              I'm Ujjwal Singh, a Full Stack Developer and
              Computer Science undergraduate passionate
              about building high-performance web
              applications and intuitive user experiences.

              <br />
              <br />

              My primary expertise lies in React,
              TypeScript, Node.js, Express and MongoDB,
              where I focus on creating scalable,
              maintainable and user-centric solutions.
            </p>

            {/* TECH TAGS */}

            <div className="flex flex-wrap gap-4 mt-10">

              {[
                "React",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "Tailwind CSS",
                "Express.js",
                "JWT",
                "Socket.IO",
                "Git / GitHub",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                  px-5
                  py-3
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

          {/* RIGHT */}

          <div className="lg:col-span-5">

            <div
              className="
              border
              border-white/10
              bg-white/[0.02]
              backdrop-blur-xl
              p-8
              lg:p-10
              rounded-3xl
              "
            >

              <div
                className="
                aspect-square
                flex
                items-center
                justify-center
                border
                border-white/10
                rounded-2xl
                bg-gradient-to-br
                from-zinc-900
                to-black
                "
              >
                <img
                src="/images/developer.png"
                alt="Developer Avatar"
                className="
                w-[85%]
                max-w-[420px]
                mx-auto
                object-contain
                "
              />
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM STRIP */}

        <div
          className="
          mt-24
          pt-12
          border-t
          border-white/10
          "
        >
          <div
            className="
            flex
            flex-wrap
            gap-10
            justify-between
            text-zinc-500
            "
          >
            <span>Full Stack Development</span>
            <span>Modern UI/UX</span>
            <span>REST APIs</span>
            <span>MERN Stack</span>
            <span>Performance Optimization</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;