import { Story } from "@ladle/react";
import Timeline from "./Timeline";
import { TimelineItemProps } from "./TimelineItem";

const timelineProps = {
  timelineItems: [
    {
      date: "February 2022",
      title: "Application UI code in Tailwind CSS",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    },
    {
      date: "March 2022",
      title: "Marketing UI design in Figma",
      description:
        "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    },
    {
      date: "April 2022",
      title: "E-Commerce UI code in Tailwind CSS",
      description:
        "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
    },
  ],
};

export const defaultStory = () => <Timeline {...timelineProps} />;
