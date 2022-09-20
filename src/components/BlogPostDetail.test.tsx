import { cleanup, render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import BlogPostDetail from "./BlogPostDetail";

describe("BlogPostDetail", () => {
  const blogPostDetailProps = {
    title: "title 1",
    coverImage: "https://picsum.photos/id/237/200/300",
    snippet: "snippet 1",
    content: `abc`,
    createdAt: "2022-08-28T14:01:00.00",
    updatedAt: "2022-08-28T14:01:00.00",
  };

  const formattedCreatedAt = dayjs(blogPostDetailProps.createdAt).format(
    "DD MMM YYYY, HH:mm"
  );

  const formattedUpdatedAt = dayjs(blogPostDetailProps.updatedAt).format(
    "DD MMM YYYY, HH:mm"
  );

  beforeEach(() => {
    render(<BlogPostDetail {...blogPostDetailProps} />);
  });

  it("should render title", () => {
    expect(screen.getByText(blogPostDetailProps.title)).toBeVisible();
  });

  it("should render cover image", () => {
    expect(screen.getByAltText(blogPostDetailProps.title)).toHaveAttribute(
      "src",
      blogPostDetailProps.coverImage
    );
  });

  it("should render date", () => {
    expect(
      screen.getByText(
        `Created at ${formattedCreatedAt}, updated at ${formattedUpdatedAt}`
      )
    ).toBeVisible();
  });

  it('should not render "updated at ..." if updatedAt props is null/undefined', () => {
    cleanup();
    render(<BlogPostDetail {...{ ...blogPostDetailProps, updatedAt: null }} />);

    expect(screen.getByText(`Created at ${formattedCreatedAt}`)).toBeVisible();
  });

  it("should render snippet", () => {
    expect(screen.getByText(blogPostDetailProps.snippet)).toBeVisible();
  });

  it("should render content", () => {});
});
