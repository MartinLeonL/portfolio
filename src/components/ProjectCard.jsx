export default function ProjectCard({ project }) {
  const { name, logo, stack, description, linkLabel = "View project →", href } = project;

  return (
    <article
      className="
        w-full
        rounded-2xl
        border-10 border-accent
        bg-background
        shadow-lg
        p-6
        transition-transform duration-300
        hover:scale-[1.03]
        hover:shadow-xl
        flex flex-col h-full
      "
    >
      {/* Logo */}
      <div className="w-full flex justify-center">
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-20 w-20 object-contain"
          loading="lazy"
          data-theme-img = "projectLogo"
        />
      </div>

      {/* Name */}
      <h3 className="mt-4 text-xl font-bold font-subheading text-accent text-center">
        {name}
      </h3>

      {/* Stack */}
      <ul className="mt-3 flex flex-wrap gap-2 justify-center">
        {stack.map((item) => (
          <li
            key={item}
            className="text-sm px-3 py-1 rounded-full font-body bg-text1/10 text-text1"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Description */}
      <p className="my-4 text-sm sm:text-base font-body text-text1 leading-relaxed">
        {description}
      </p>

      {/* Link */}
      <div className="mt-auto">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center justify-center
            w-full
            rounded-xl
            bg-surface hover:bg-button1
            text-text2
            font-semibold
            font-subheading
            py-2.5
            transition-colors
          "
        >
          {linkLabel}
        </a>
      </div>
    </article>
  );
}
