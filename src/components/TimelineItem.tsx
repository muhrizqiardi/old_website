interface TimelineItemProps {
  date: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}

function TimelineItem(props: TimelineItemProps) {
  return (
    <li className="list-none flex group">
      <div className="w-20 flex-shrink-0 flex flex-col items-center">
        <div className="w-0.5 h-5 flex-shrink-0 bg-black group-first:bg-transparent"></div>
        <div className="w-5 h-5 flex-shrink-0 bg-white border-4 border-black rounded-full"></div>
        <div className="w-0.5 h-full bg-black group-last:bg-transparent"></div>
      </div>
      <div className="w-full py-4">
        <p className="font-bold">{props.title}</p>
        <p className="text-xs text-gray-500">{props.date}</p>
        <p className="mt-2">{props.description}</p>
      </div>
    </li>
  );
}

export type { TimelineItemProps };
export default TimelineItem;
