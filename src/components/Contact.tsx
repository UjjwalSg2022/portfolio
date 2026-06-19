import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const contacts = [
  {
    icon: MdEmail,
    title: "Email",
    value: "Available for opportunities",
    link: "mailto:ujjwalyadav0070@gmail.com",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "Professional Network",
    link: "https://linkedin.com/in/ujjwal-singh02",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "Projects & Open Source",
    link: "https://github.com/UjjwalSg2022",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    value: "Behind the Scenes",
    link: "https://instagram.com/ujjwalyadav_0007",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="
      py-32
      border-t
      border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADER */}

        <div className="text-center mb-20">

          <p
            className="
            text-zinc-500
            uppercase
            tracking-[0.4em]
            text-sm
            mb-6
            "
          >
            Contact
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
            Let's Build Something
            <br />
            Great Together
          </h2>

          <p
            className="
            text-zinc-400
            mt-8
            max-w-3xl
            mx-auto
            text-lg
            leading-relaxed
            "
          >
            Have a project, startup idea, freelance
            opportunity or full-time role in mind?
            I'd love to hear from you and discuss
            how we can bring it to life.
          </p>

        </div>

        {/* CONTACT GRID */}

        <div className="grid md:grid-cols-2 gap-6">

          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.title}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                group
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
                <div className="flex items-center gap-4 mb-6">

                  <div
                    className="
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    border
                    border-white/10
                    rounded-xl
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {contact.title}
                  </h3>

                </div>

                <p
                  className="
                  text-zinc-400
                  break-all
                  "
                >
                  {contact.value}
                </p>

              </a>
            );
          })}

        </div>

        {/* CTA */}

        <div className="flex flex-wrap justify-center gap-4 mt-16">

        <a
            href="/resume/Ujjwal_resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="
            relative
            z-50
            inline-flex
            items-center
            gap-3
            px-8
            py-4
            rounded-full
            border
            border-white/10
            hover:border-white/20
            transition
            "
            >
            Download Resume
            </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;