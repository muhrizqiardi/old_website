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

export interface HomePageProps {
  projects: HomeProjectCardProps[];
  aboutMeDescription: string;
  experiences: TimelineItemProps[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = () => {
  const projects = [
    {
      title: "RESH — Read and Share",
      description:
        "A web app for tracking your book reading progress, and also share your thoughts on a book.",
      image: "/assets/projects-thumbnail/resh-project.png",
      tags: ["React", "Supabase", "Redux", "styled-components"],
      href: "https://resh-project.vercel.app/",
    },
    {
      title: "Notefield",
      description:
        "A note-taking app made with React libary for the front-end, and Express for the API. I made this because I feel like all note-taking app in the market isn't good enough for me.",
      image: "/assets/projects-thumbnail/notefield.png",
      tags: ["React", "Sass", "Express", "MongoDB"],
      href: "https://notefield.vercel.app/",
    },
    {
      title: "Shopbux",
      description: "A shopping cart app I made to demonstrate Redux in React.",
      image: "/assets/projects-thumbnail/shopbux.png",
      tags: ["React", "Redux", "TailwindCSS"],
      href: "https://shopbux.vercel.app/",
    },
    {
      title: "react-todo",
      description:
        "A to-do list app made with React library for the front-end, and Express for the API.",
      image: "/assets/projects-thumbnail/react-todo.png",
      tags: ["React", "Sass", "Express", "MongoDB"],
      href: "https://muhrizqiardi-react-todo.herokuapp.com/",
    },
    {
      title: "creative@home",
      description: "A website my team created for a web design competition.",
      image: "/assets/projects-thumbnail/creative-at-home.png",
      tags: ["JavaScript"],
      href: "https://varcode-project.github.io/creative-at-home/",
    },
    {
      title: "Koffee Khayalaan Store",
      description:
        "An e-commerce and a landing website for a fictional cafe. Made with Next.js for the front-end and Strapi as the headless CMS to provide an API to the front-end side.",
      image: "/assets/projects-thumbnail/Koffee-Khayalaan.png",
      tags: ["React", "Next.js", "Sass", "Strapi"],
      href: "https://koffee-khayalaan.vercel.app/",
    },
    {
      title: "muhrizqiardi.me",
      description: "This (beautiful) website.",
      image: "/assets/projects-thumbnail/muhrizqiardi.github.io.png",
      tags: ["React", "Next.js", "TailwindCSS"],
      href: "https://muhrizqiardi.me/",
    },
  ];
  const aboutMeDescription =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit molestias pariatur deserunt nisi laboriosam dolorum iusto reiciendis nihil aperiam, omnis quibusdam consequatur nobis minima illum architecto doloremque quis hic dolorem. Illo ad omnis obcaecati neque itaque quas debitis. Laboriosam harum voluptatibus veritatis, reprehenderit deserunt quisquam, deleniti odio assumenda doloribus amet veniam corrupti numquam dolore! Praesentium et saepe sit dolorum consequuntur.";
  const experiences = [
    {
      date: "December 2021 - June 2022",
      title: "Frontend Engineer at Rumah Coding Cerdas",
      description:
        "Implement a single-page application (SPA) website using React library based on a provided design, write unit tests for the written code, and collaborate with the team to implement new features",
    },
  ];

  return { props: { projects, experiences, aboutMeDescription } };
};

const HomePage = (props: HomePageProps) => {
  return (
    <div className="bg-custom-light">
      <HomeHeader />
      <HomeHeroSection />
      <Hr />
      <HomeProjectsSection projects={props.projects} />
      <Hr />
      <HomeSection title="About me">
        <MultiLineToParagraphs paragraphs={props.aboutMeDescription} />
      </HomeSection>
      <HomeSection title="Experiences">
        <Timeline timelineItems={props.experiences} />
      </HomeSection>
      <Hr />
      <HomeFooter />
    </div>
  );
};

export default HomePage;
