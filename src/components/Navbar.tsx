const Navbar = () => {
  return (
    <nav
      className="
      h-20
      lg:h-24
      flex
      items-center
      justify-between
      "
    >
      {/* LOGO */}

      <a href="#home" className="group leading-none">

        <p
          className="
          text-[11px]
          lg:text-xs
          text-zinc-500
          transition
          group-hover:text-zinc-300
          "
        >
          Ujjwal
        </p>

        <h2
          className="
          text-xl
          lg:text-sm
          font-semibold
          lg:font-normal
          text-white
          transition
          group-hover:text-zinc-300
          "
        >
          Singh
        </h2>

      </a>

      {/* NAV LINKS */}

      <div
        className="
        hidden
        md:flex
        gap-8
        lg:gap-10
        text-sm
        text-zinc-400
        "
      >
        <a
          href="#about"
          className="hover:text-white transition"
        >
          About
        </a>

        <a
          href="#services"
          className="hover:text-white transition"
        >
          Services
        </a>

        <a
          href="#projects"
          className="hover:text-white transition"
        >
          Projects
        </a>

        <a
          href="#experience"
          className="hover:text-white transition"
        >
          Experience
        </a>

        <a
          href="#skills"
          className="hover:text-white transition"
        >
          Skills
        </a>
      </div>

      {/* RESUME BUTTON */}

      <a
        href="/resume/Ujjwal_resume.pdf"
        download
        className="
        px-4
        lg:px-6
        py-2.5
        lg:py-3
        text-sm
        lg:text-base
        border
        border-white/10
        rounded-full
        hover:border-white/20
        hover:bg-white/5
        transition
        "
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;