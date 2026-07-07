import { Link } from "react-router";
import { services } from "../../data/services";

export default function ServicesCards() {
  const layoutClasses = [
    "max-lg:rounded-t-lg lg:col-span-3 lg:rounded-tl-lg",
    "lg:col-span-3 lg:rounded-tr-lg",
    "lg:col-span-2 lg:rounded-bl-lg",
    "lg:col-span-2",
    "lg:col-span-2",
    "max-lg:rounded-b-lg lg:col-span-3 lg:rounded-br-none",
    "max-lg:rounded-b-lg lg:col-span-3 lg:rounded-br-lg",
  ];

  return (
    <section className="bg-[#0e1a2b] pb-16">
      <div className="container mx-auto flex min-h-screen w-full flex-col p-10 pt-32">
        <h1 className="font-geistMono text-3xl tracking-tight text-white md:text-5xl">
          Nuestros Servicios
        </h1>
        <p className="mt-2 max-w-3xl bg-gradient-to-br from-white to-white/40 bg-clip-text text-xl font-medium tracking-tight text-transparent md:text-2xl">
          Soluciones contables, fiscales y administrativas para la continuidad
          y el crecimiento de tu organizacion.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-3">
          {services.map((service, index) => (
            <BentoCard
              key={service.path}
              {...service}
              className={layoutClasses[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type BentoCardProps = {
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  path: string;
  image?: string;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
};

export function BentoCard({
  className = "",
  eyebrow,
  title,
  description,
  path,
  image,
  graphic,
  fade = [],
}: BentoCardProps) {
  return (
    <Link
      to={path}
      aria-label={`Ver servicio: ${title}`}
      className={`
        ${className}
        group relative flex flex-col overflow-visible rounded-lg
        border border-white/10 bg-transparent
        shadow-[0_-20px_80px_-20px_#8686f01f_inset]
        transition-transform duration-300 hover:-translate-y-1
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80
      `}
    >
      <div className="relative min-h-[20rem] shrink-0 overflow-hidden rounded-t-lg md:min-h-[29rem]">
        {image ? (
          <>
            <img
              src={image}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full select-none object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />
          </>
        ) : (
          graphic
        )}

        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-50% opacity-25" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-50% opacity-25" />
        )}
      </div>

      <div className="relative z-20 isolate mt-[-80px] min-h-[12rem] rounded-b-lg p-6 text-white backdrop-blur-xl md:mt-[-110px] md:min-h-[14rem] md:p-10">
        <h2 className="text-xs uppercase tracking-widest text-white/70">
          {eyebrow}
        </h2>
        <p className="mt-1 text-xl font-medium tracking-tight text-white md:text-2xl/8">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-300">
          {description}
        </p>
        <span className="mt-4 inline-flex text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
          Ver servicio
        </span>
      </div>
    </Link>
  );
}
