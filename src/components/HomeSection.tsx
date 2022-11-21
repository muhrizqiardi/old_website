export interface HomeSectionProps {
  title?: string;
  children?: React.ReactNode;
}

function HomeSection(props: HomeSectionProps) {
  return (
    <section className="px-5 lg:px-36 py-5 lg:py-10 bg-custom-light">
      <h1 className="text-center text-2xl lg:text-3xl font-bold mb-5 lg:mb-10">
        {props.title}
      </h1>
      <article className="prose max-w-none text-black">{props.children}</article>
    </section>
  );
}

export default HomeSection;
