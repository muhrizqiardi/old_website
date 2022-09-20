import HomeProjectCard, { HomeProjectCardProps } from "./HomeProjectCard";

export interface HomeProjectsSectionProps {
  projects: HomeProjectCardProps[];
}

function HomeProjectsSection(props: HomeProjectsSectionProps) {
  const gridProjectItems = props.projects.map((project, index) => (
    <div
      key={index}
      className={index === 1 || index === 2 ? "md:col-span-2" : ""}
    >
      <HomeProjectCard {...project} />
    </div>
  ));

  return (
    <section className="px-5 lg:px-36 py-5 lg:py-10 bg-custom-dark">
      <h1 className="text-center text-white text-2xl lg:text-3xl font-bold mb-5 lg:mb-10">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-4">
        {gridProjectItems}
      </div>
    </section>
  );
}

export default HomeProjectsSection;
