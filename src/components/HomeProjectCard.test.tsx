import { render, screen } from "@testing-library/react";
import HomeProjectCard from "./HomeProjectCard";

describe("HomeProjectCard", () => {
  const homeProjectCardProps = {
    image: "https://picsum.photos/id/237/200/300",
    title: "title",
    description: "description",
    href: "/projects/1",
  };

  it("should render image, title, and description passed from props", () => {
    render(<HomeProjectCard {...homeProjectCardProps} />);

    expect(screen.getByText(homeProjectCardProps.title)).toBeInTheDocument();
    expect(
      screen.getByText(homeProjectCardProps.description)
    ).toBeInTheDocument();
    expect(screen.getByAltText(homeProjectCardProps.title)).toHaveAttribute(
      "src",
      homeProjectCardProps.image
    );
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      homeProjectCardProps.href
    );
  });
});
