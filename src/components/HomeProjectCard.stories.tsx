import { Story } from "@ladle/react";
import HomeProjectCard from "./HomeProjectCard";

const homeProjectCardProps = {
  image: "https://picsum.photos/id/237/200/300",
  title: "Project Acme",
  description: "This is the description of the Project Acme.",
  href: "/projects/1"
};

export const defaultStory: Story<{
  image: string;
  title: string;
  description: string;
  href: string;
}> = (props) => <HomeProjectCard {...props} />;

defaultStory.args = {
  image: "https://picsum.photos/id/237/1600/900",
  title: "Project Acme",
  description: "This is the description of the Project Acme.",
  href: ""
};

export const exampleUsage = () => (
  <div className="grid grid-cols-2 gap-4">
    <HomeProjectCard {...homeProjectCardProps} />
    <HomeProjectCard {...homeProjectCardProps} />
  </div>
);
