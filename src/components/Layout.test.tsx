import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it('should render component and the prop', () => {
    render(
      <Layout navMenu={<p>navMenuProp</p>}>
        <p>childrenProp</p>
      </Layout>
    );

    expect(screen.getByText("navMenuProp")).toBeInTheDocument();
    expect(screen.getByText("childrenProp")).toBeInTheDocument();
  });
});
