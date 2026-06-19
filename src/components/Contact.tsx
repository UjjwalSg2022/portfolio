import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { useState } from "react";
import emailjs from "@emailjs/browser";





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
const [formData, setFormData] = useState({
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  try {
    setLoading(true);

    await emailjs.send(
      "gmail_service",
      "template_q00k4n7",
      formData,
      "IwEP0YD5evf7HZrQk"
    );

    setSuccess("Message sent successfully!");

    setFormData({
      from_name: "",
      from_email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    setSuccess(
      "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};
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

        <div
  className="
  mt-16
  max-w-3xl
  mx-auto
  border
  border-white/10
  bg-white/[0.02]
  backdrop-blur-xl
  rounded-3xl
  p-8
  "
>
  <form
    onSubmit={handleSubmit}
    className="space-y-6"
  >
    <input
      type="text"
      name="from_name"
      placeholder="Your Name"
      value={formData.from_name}
      onChange={handleChange}
      required
      className="
      w-full
      bg-transparent
      border
      border-white/10
      rounded-xl
      px-5
      py-4
      outline-none
      "
    />

    <input
      type="email"
      name="from_email"
      placeholder="Your Email"
      value={formData.from_email}
      onChange={handleChange}
      required
      className="
      w-full
      bg-transparent
      border
      border-white/10
      rounded-xl
      px-5
      py-4
      outline-none
      "
    />

    <input
      type="text"
      name="subject"
      placeholder="Subject"
      value={formData.subject}
      onChange={handleChange}
      required
      className="
      w-full
      bg-transparent
      border
      border-white/10
      rounded-xl
      px-5
      py-4
      outline-none
      "
    />

    <textarea
      rows={6}
      name="message"
      placeholder="Your Message"
      value={formData.message}
      onChange={handleChange}
      required
      className="
      w-full
      bg-transparent
      border
      border-white/10
      rounded-xl
      px-5
      py-4
      resize-none
      outline-none
      "
    />

    <button
      type="submit"
      disabled={loading}
      className="
      w-full
      py-4
      rounded-xl
      bg-white
      text-black
      font-semibold
      cursor-pointer
      "
    >
      {loading ? "Sending..." : "Send Message"}
    </button>

    {success && (
      <p className="text-center text-zinc-400">
        {success}
      </p>
    )}
  </form>
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