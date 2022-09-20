interface HomeProjectCardProps {
  title: string;
  image: string;
  description: string;
  href: string;
}

function HomeProjectCard(props: HomeProjectCardProps) {
  const descriptionElement = (
    <div className="max-w-xs m-4 p-4 bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-md z-40 flex flex-col-reverse">
      <h3 className="text-lg font-bold">
        <a href={props.href} className="hover:underline">
          {props.title}
        </a>
      </h3>
      <p className="mb-2 text-sm line-clamp-4">{props.description}</p>
    </div>
  );

  const imageElement = (
    <div className="h-0 overflow-visible relative bottom-60 z-30">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-60 object-cover group-hover:transform duration-150 group-hover:scale-105"
      />
    </div>
  );

  return (
    <article className="group w-full h-60 rounded-2xl shadow-md bg-gray-300 flex flex-col overflow-hidden justify-end">
      {descriptionElement}
      {imageElement}
    </article>
  );
}

export type { HomeProjectCardProps };
export default HomeProjectCard;
