const Footer = () => {
  return (
    <footer className="border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <div className="text-center">

          <p
            className="
            text-zinc-400
            max-w-md
            mx-auto
            leading-relaxed
            "
          >
            Building modern web applications and
            digital products.
          </p>

          <div
            className="
            mt-10
            pt-6
            border-t
            border-white/10
            "
          >
            <p className="text-zinc-500 text-sm">
              © 2026 All Rights Reserved
            </p>

            <p className="text-zinc-600 text-sm mt-3">
              Built with React, TypeScript & Tailwind CSS
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;