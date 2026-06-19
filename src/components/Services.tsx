import {
  Monitor,
  Globe,
  Layers3,
  Database,
  Rocket,
  Palette,
} from "lucide-react";

const services = [
    {
    icon: Globe,
    title: "Business Websites",
    description:
      "Creating premium, responsive websites that help businesses establish a strong online presence.",
  },
  {
    icon: Monitor,
    title: "Web Application Development",
    description:
      "Building scalable web applications using React, Node.js, Express and MongoDB with modern architecture.",
  },
  {
    icon: Layers3,
    title: "Modern Frontend Interfaces",
    description:
      "Developing modern user interfaces with React, TypeScript, Tailwind CSS and smooth user experiences.",
  },
  {
    icon: Database,
    title: "Backend Systems & APIs",
    description:
      "Designing secure APIs, authentication systems and scalable backend infrastructures.",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Transforming Figma and design concepts into pixel-perfect, production-ready applications.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Improving website speed, responsiveness and overall user experience across all devices.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="
      py-28
      border-t
      border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}

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
            Services
          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            tracking-tight
            max-w-4xl
            "
          >
            Helping Startups & Businesses
            Build Better Software.
          </h2>

          <p
            className="
            text-zinc-400
            text-lg
            mt-8
            max-w-2xl
            leading-relaxed
            "
          >
            From business websites to full-stack web applications,
            I help startups and companies turn ideas into
            scalable digital products.
          </p>

        </div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                group
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:border-white/20
                hover:-translate-y-2
                "
              >
                <div
                  className="
                  w-14
                  h-14
                  flex
                  items-center
                  justify-center
                  border
                  border-white/10
                  mb-6
                  "
                >
                  <Icon size={24} />
                </div>

                <h3
                  className="
                  text-2xl
                  font-semibold
                  mb-4
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                  text-zinc-400
                  leading-relaxed
                  "
                >
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Services;