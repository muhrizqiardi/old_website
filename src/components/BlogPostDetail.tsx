import dayjs from "dayjs";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface BlogPostDetailProps {
  title: string;
  coverImage?: string;
  snippet: string;
  content: string;
  createdAt: string;
  updatedAt?: string | null;
}

function BlogPostDetail(props: BlogPostDetailProps) {
  const formattedCreatedAt = dayjs(props.createdAt).format(
    "DD MMM YYYY, HH:mm"
  );

  const formattedUpdatedAt = dayjs(props.updatedAt).format(
    "DD MMM YYYY, HH:mm"
  );

  const formattedDate =
    props.updatedAt !== undefined && props.updatedAt !== null
      ? `Created at ${formattedCreatedAt}, updated at ${formattedUpdatedAt}`
      : `Created at ${formattedCreatedAt}`;

  return (
    <div className="max-w-2xl mx-auto my-8 p-4">
      <article className="gap-4 prose">
        <div className="flex flex-col not-prose text-black">
          <p className="mb-1 text-custom-primary text-sm uppercase">
            {formattedDate}
          </p>
          <h2 className="mb-4 text-2xl font-bold">{props.title}</h2>
        </div>

        {props.coverImage ? (
          <div className="w-full h-96 object-contain bg-black rounded-2xl flex flex-col gap-3 overflow-hidden">
            <Image
              src={props.coverImage}
              alt={props.title}
              width="100%"
              height={384}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        ) : null}

        <p className="mb-4 not-prose text-sm leading-tight">{props.snippet}</p>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </article>
    </div>
  );
}

export type { BlogPostDetailProps };
export default BlogPostDetail;
