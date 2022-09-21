import { render, screen } from "@testing-library/react";
import BlogLayout from "./BlogLayout";

describe("Layout", () => {
  it('should render component and the prop', () => {
    render(
      <BlogLayout navMenu={<p>navMenuProp</p>}>
        <p>childrenProp</p>
      </BlogLayout>
    );

    expect(screen.getByText("navMenuProp")).toBeInTheDocument();
    expect(screen.getByText("childrenProp")).toBeInTheDocument();
  });
});
