import { Story } from "@ladle/react";
import TimelineItem from "./TimelineItem";

export const defaultStory: Story<{
  date: string;
  title: string;
  description: string;
}> = (props) => <TimelineItem {...props} />;

defaultStory.args = {
  date: "December 2021 - June 2022",
  title: "Frontend Engineer at PT Acme",
  description: "Lorem ipsum 123",
};
