import { render, screen } from "@testing-library/react";
import TimelineItem from "./TimelineItem";

describe("TimelineItem", () => {
  const timelineItemProps = {
    date: "December 2021 - June 2022",
    title: "Frontend Engineer at PT Acme",
    description: "Lorem ipsum 123",
  };

  it('should render items passed from "date", "title", and "description" prop', () => {
    render(<TimelineItem {...timelineItemProps} />);

    expect(screen.getByText(timelineItemProps.date)).toBeInTheDocument();
    expect(screen.getByText(timelineItemProps.title)).toBeInTheDocument();
    expect(screen.getByText(timelineItemProps.description)).toBeInTheDocument();
  });
});
