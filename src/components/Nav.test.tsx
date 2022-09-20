import { fireEvent, render, screen } from "@testing-library/react";
import Nav from "./Nav";

describe("Nav", () => {
  it("should render all nav items correctly", () => {
    const navItems = [
      {
        href: "/",
        title: "Home",
        isCurrentPage: true,
      },
      {
        href: "/blog",
        title: "Blog",
        isCurrentPage: false,
      },
      {
        href: "/resume",
        title: "Resume",
        isCurrentPage: false,
      },
    ];

    render(<Nav navItems={navItems} />);

    const navItemElements = screen.getAllByRole("link");

    navItemElements.forEach((navItemElement, index) => {
      expect(navItemElement).toHaveTextContent(navItems[index].title);
    });
  });

  it("should hide and show nav menu only when nav button is clicked on mobile screen", () => {
    const navItems = [
      {
        href: "/",
        title: "Example",
        isCurrentPage: true,
      },
    ];

    render(<Nav navItems={navItems} />);

    const navButtonElement = screen.getByText("Toggle Navigation Menu");
    const navMenuElement = screen.getByTestId("navigation-menu");

    fireEvent.click(navButtonElement);

    expect(navMenuElement).not.toHaveClass("hidden", "md:block");

    fireEvent.click(navButtonElement);

    expect(navMenuElement).toHaveClass("hidden", "md:block");
  });
});
