import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import BlogPostsListItem from "./BlogPostsListItem";

describe("BlogPostsListItem", () => {
  const blogPostsListItemProps = {
    thumbnail: "https://picsum.photos/id/237/200/300",
    title: "title 1",
    href: "/blog/posts/1",
    snippet: "snippet 1",
    createdAt: "2022-08-28T14:01:00.00",
    updatedAt: "2022-08-28T14:01:00.00",
  };

  const formattedCreatedAt = dayjs(blogPostsListItemProps.createdAt).format(
    "DD MMM YYYY, HH:mm"
  );

  const formattedUpdatedAt = dayjs(blogPostsListItemProps.createdAt).format(
    "DD MMM YYYY, HH:mm"
  );

  it("should render thumbnail, title, snippet, creation date, and update date passed from props", () => {
    render(<BlogPostsListItem {...blogPostsListItemProps} />);

    expect(screen.getByText(blogPostsListItemProps.title)).toBeInTheDocument();
    expect(
      screen.getByText(blogPostsListItemProps.snippet)
    ).toBeInTheDocument();
    expect(screen.getByAltText(blogPostsListItemProps.title)).toHaveAttribute(
      "src",
      blogPostsListItemProps.thumbnail
    );
    expect(
      screen.getByText(
        `Updated at ${formattedUpdatedAt} | Created at ${formattedCreatedAt}`
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      blogPostsListItemProps.href
    );
  });

  it("should only render createdAt date if updatedAt is null/undefined", () => {
    render(
      <BlogPostsListItem
        {...{
          ...blogPostsListItemProps,
          updatedAt: null,
        }}
      />
    );

    expect(
      screen.getByText(`Created at ${formattedCreatedAt}`)
    ).toBeInTheDocument();
  });
});
