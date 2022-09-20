import TimelineItem, { TimelineItemProps } from "./TimelineItem";

interface TimelineProps {
  timelineItems: TimelineItemProps[];
}

function Timeline(props: TimelineProps) {
  return (
    <ul>
      {props.timelineItems.map((timelineItem, index) => (
        <TimelineItem key={index} {...timelineItem} />
      ))}
    </ul>
  );
}

export default Timeline;
