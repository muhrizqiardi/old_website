import type { GetStaticProps } from "next";
import HomeSection from "../components/HomeSection";
import HomeFooter from "../components/HomeFooter";
import HomeHeader from "../components/HomeHeader";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeProjectsSection from "../components/HomeProjectsSection";
import Hr from "../components/Hr";
import Timeline from "../components/Timeline";
import { HomeProjectCardProps } from "../components/HomeProjectCard";
import { TimelineItemProps } from "../components/TimelineItem";
import MultiLineToParagraphs from "../components/MultiLineToParagraphs";
import homePageContent from "../services/homePageContent";
import Link from "next/link";
import HomePageContactMeSection from "../components/HomePageContactMeSection";

export interface HomePageProps {
  resumeUrl: string;
  socials: { name: string; url: string }[];
  projects: HomeProjectCardProps[];
  aboutMeDescription: string;
  experiences: TimelineItemProps[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = () => {
  const resumeUrl = homePageContent.resume;
  const projects = homePageContent.projects;
  const aboutMeDescription = homePageContent["about me"];
  const experiences = homePageContent.experiences;
  const socials = [
    {
      name: "GitHub",
      url: homePageContent.socials.github,
    },
    {
      name: "Twitter",
      url: homePageContent.socials.twitter,
    },
    {
      name: "Instagram",
      url: homePageContent.socials.instagram,
    },
    {
      name: "Mastodon",
      url: homePageContent.socials.mastodon,
    },
    {
      name: "LinkedIn",
      url: homePageContent.socials.linkedin,
    },
    {
      name: "Email",
      url: homePageContent.socials.email,
    },
  ];

  return {
    props: { resumeUrl, projects, experiences, aboutMeDescription, socials },
  };
};

const HomePage = (props: HomePageProps) => {
  return (
    <div className="bg-custom-light">
      <HomeHeader />
      <HomeHeroSection resumeUrl={props.resumeUrl} />
      <Hr />
      <HomeProjectsSection projects={props.projects} />
      <Hr />
      <HomeSection title="About me">
        <MultiLineToParagraphs paragraphs={props.aboutMeDescription} />
      </HomeSection>
      <HomeSection title="Experiences">
        <Timeline timelineItems={props.experiences} />
      </HomeSection>
      <HomePageContactMeSection socials={props.socials} />
      <Hr />
      <HomeFooter />
    </div>
  );
};

export default HomePage;
