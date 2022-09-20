import { render, screen } from "@testing-library/react";
import Timeline from "./Timeline";

describe("Timeline", () => {
  const timelineProps = {
    timelineItems: [
      {
        date: "date 1",
        title: "title 1",
        description: "desc 1",
      },
      {
        date: "date 2",
        title: "title 2",
        description: "desc 2",
      },
      {
        date: "date 3",
        title: "title 3",
        description: "desc 3",
      },
    ],
  };

  it("should render timeline", () => {
    render(<Timeline {...timelineProps} />);

    timelineProps.timelineItems.forEach((timelineItem) => {
      expect(screen.getByText(timelineItem.date)).toBeInTheDocument();
      expect(screen.getByText(timelineItem.title)).toBeInTheDocument();
      expect(screen.getByText(timelineItem.description)).toBeInTheDocument();
    });
  });
});
