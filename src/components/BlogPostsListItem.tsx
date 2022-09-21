import dayjs from "dayjs";

interface BlogPostsListItemProps {
  thumbnail?: string;
  title: string;
  href: string;
  snippet: string;
  createdAt: string;
  updatedAt?: string | null;
}

function BlogPostsListItem(props: BlogPostsListItemProps) {
  const formattedCreatedAt = dayjs(props.createdAt).format(
    "DD MMM YYYY, HH:mm"
  );

  const formattedUpdatedAt = dayjs(props.createdAt).format(
    "DD MMM YYYY, HH:mm"
  );

  const formattedDate =
    props.updatedAt !== undefined && props.updatedAt !== null
      ? `Updated at ${formattedUpdatedAt} | Created at ${formattedCreatedAt}`
      : `Created at ${formattedCreatedAt}`;

  return (
    <article className="flex flex-col md:flex-row gap-4">
      {props.thumbnail ? (
        <img
          src={props.thumbnail}
          alt={props.title}
          className="w-full md:w-56 h-56 md:h-36 object-cover rounded-2xl flex flex-col gap-3"
        />
      ) : null}
      <div className="flex flex-col">
        <p className="mb-1 text-custom-primary text-sm uppercase">
          {formattedDate}
        </p>
        <h2 className="text-2xl font-bold">
          <a href={props.href} className="hover:underline">
            {props.title}
          </a>
        </h2>
        <p className="line-clamp-3">{props.snippet}</p>
      </div>
    </article>
  );
}

export type { BlogPostsListItemProps };
export default BlogPostsListItem;
