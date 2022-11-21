import Link from "next/link";
import HomeSection from "./HomeSection";
import {
  BsGithub,
  BsTwitter,
  BsInstagram,
  BsMastodon,
  BsLinkedin,
  BsEnvelopeFill,
} from "react-icons/bs";

interface HomePageContactMeSectionProps {
  socials: {
    name: string;
    url: string;
  }[];
}

export default function HomePageContactMeSection(
  props: HomePageContactMeSectionProps
) {
  const Icon = ({ name = "" }: { name: string }) => {
    switch (name) {
      case "GitHub":
        return <BsGithub />;
      case "Twitter":
        return <BsTwitter />;
      case "Instagram":
        return <BsInstagram />;
      case "Mastodon":
        return <BsMastodon />;
      case "LinkedIn":
        return <BsLinkedin />;
      case "Email":
        return <BsEnvelopeFill />;
      default:
        return <></>;
    }
  };

  return (
    <HomeSection title="Contact Me">
      <div className="flex justify-center gap-2">
        {props.socials ? (
          props.socials.map((social, index) => (
            <Link key={index} href={social.url}>
              <a className="px-3 py-2 text-sm bg-custom-dark text-custom-light rounded-md hover:bg-custom-primary hover:text-custom-dark no-underline inline-flex items-center gap-2">
                <Icon name={social.name} />
                {social.name}
              </a>
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </HomeSection>
  );
}
