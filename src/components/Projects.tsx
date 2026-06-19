const projects = [
  {
    number: "01",
    title: "SkyNest",
    category: "Luxury Real Estate Platform",
    description:
      "Developed a full-stack MERN real estate platform with secure JWT authentication, property management, advanced search and filtering, favorites system, inquiry management, and role-based dashboards for buyers, agents, and administrators.",
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    status: "In Development",
  },
  {
    number: "02",
    title: "BidEngine",
    category: "Real-Time Auction Platform",
    description:
      "Building a real-time auction platform featuring live bidding with Socket.IO, secure payment integration, role-based access control, auction analytics, and scalable backend architecture for high-concurrency events.",
    stack: ["MERN", "Socket.IO", "Razorpay"],
    status: "Building Core Features",
  },
  {
    number: "03",
    title: "CollabHub",
    category: "Team Collaboration SaaS",
    description:
      "Designing and developing a SaaS collaboration platform focused on project management, team communication, workflow organization, and productivity enhancement through an intuitive and responsive user experience.",
    stack: ["React", "Tailwind", "Framer Motion"],
    status: "UI Development Phase",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 lg:px-20 py-24 border-t border-white/10"
    >
      <div className="mb-20">
        <p className="text-zinc-500 uppercase tracking-[0.4em] text-sm mb-6">
          Featured Work
        </p>

        <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight">
          Selected
          <br />
          Projects
        </h2>
      </div>

      <div className="space-y-6">

        {projects.map((project) => (
          <div
            key={project.title}
            className="
            border
            border-white/10
            rounded-[30px]
            bg-white/[0.02]
            backdrop-blur-xl
            overflow-hidden
            transition-all
            duration-500
            hover:border-white/20
            hover:bg-white/[0.03]
            "
          >
            {/* TOP ROW */}

            <div
              className="
              grid
              lg:grid-cols-12
              gap-4
              p-8
              "
            >
              <div className="lg:col-span-2">
                <span className="text-zinc-500 text-xl">
                  {project.number}
                </span>
              </div>

              <div className="lg:col-span-6">
                <h3
                  className="
                  text-4xl
                  lg:text-6xl
                  font-bold
                  tracking-tight
                  "
                >
                  {project.title}
                </h3>
              </div>

              <div className="lg:col-span-4 text-zinc-400">
                {project.category}
              </div>
            </div>

            {/* CONTENT */}

            <div className="px-8 pb-8">

              <p
                className="
                text-zinc-400
                leading-relaxed
                max-w-3xl
                
                "
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="
                    px-4
                    py-2
                    text-sm
                    rounded-full
                    border
                    border-white/10
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="mt-8 pt-6 border-t border-white/10">

                <span className="text-zinc-500 text-sm">
                  Status:
                </span>

                <span className="ml-2 text-white">
                  {project.status}
                </span>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;