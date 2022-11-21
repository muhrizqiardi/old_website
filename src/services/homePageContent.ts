import path from "path";
import yaml from "js-yaml";
import fs from "fs";

export interface IHomePageContent {
  "full name": string;
  "about me": string;
  headline: string;
  resume: string;
  socials: {
    github: string;
    twitter: string;
    instagram: string;
    mastodon: string;
    linkedin: string;
    [k: string]: string;
  };
  experiences: {
    date: string;
    title: string;
    description: string;
  }[];
  projects: {
    title: string;
    href: string;
    image: string;
    description: string;
  }[];
}

const contentsDirectory = path.join(process.cwd(), "src", "contents");
const homePageYamlDirectory = path.join(contentsDirectory, "home-page.yaml");

const homePageContent = yaml.load(
  fs.readFileSync(homePageYamlDirectory).toString()
) as IHomePageContent;

export default homePageContent;
