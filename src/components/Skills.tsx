const skills = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Socket.IO",
      "JWT Authentication",
      "REST APIs",
    ],
  },
  {
    title: "Database",
    items: [
      "MongoDB",
      "Mongoose",
      "SQL",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vercel",
    ],
  },
  {
  title: "Specializations",
  items: [
    "Full Stack Development",
    "Web Applications",
    "REST API Development",
    "Responsive Design",
  ],
},
  {
  title: "Currently Learning",
  items: [
    "AI Integration with LLM APIs",
    "Docker",
    "System Design",
    "AWS",
    "CI/CD",
    "WebSockets",
  ],
}
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
      py-32
      border-t
      border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* SECTION HEADER */}

        <div className="mb-20">

          <p
            className="
            text-zinc-500
            uppercase
            tracking-[0.4em]
            text-sm
            mb-6
            "
          >
            Tech Stack
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
            Technologies I Work With
          </h2>

          <p
            className="
            mt-8
            text-zinc-400
            max-w-3xl
            text-lg
            leading-relaxed
            "
          >
            Leveraging modern technologies, frameworks and
            development tools to build scalable applications,
            premium user experiences and production-ready
            digital products.
          </p>

        </div>

        {/* SKILLS GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="
              border
              border-white/10
              bg-white/[0.02]
              backdrop-blur-xl
              rounded-3xl
              p-8
              transition-all
              duration-500
              hover:border-white/20
              hover:-translate-y-2
              "
            >
              <h3
                className="
                text-2xl
                font-semibold
                mb-8
                "
              >
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-sm
                    text-zinc-300
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;