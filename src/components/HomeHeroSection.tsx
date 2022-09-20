import Image from "next/image";
import Link from "next/link";

export interface HomeHeroSectionProps {
  heroImageSrc?: string;
}

function HomeHeroSection(props: HomeHeroSectionProps) {
  const {
    heroImageSrc = "https://res.cloudinary.com/dwfpjmsiq/image/upload/f_auto/me_oazxbd.jpg",
  } = props;

  return (
    <section
      id="hero"
      className="px-5 md:px-20 pt-2 pb-10 grid grid-cols-1 lg:grid-cols-3"
    >
      <div className="flex justify-center items-center m-5 lg:mr-7">
        <div className="w-[250px] h-[250px] rounded-full drop-shadow-xl overflow-hidden">
          <Image
            src={heroImageSrc}
            alt="My Picture"
            width="250px"
            height="250px"
          />
        </div>
      </div>
      <div className="hero-text col-span-2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:ml-2">
        <h3 id="greeting" className=" font-normal text-gray-900 text-2xl">
          Hi, I&apos;m
        </h3>
        <h1 id="name" className="font-black text-3xl lg:text-6xl pb-3">
          Muhammad Rizqi Ardiansyah.
        </h1>
        <p id="desc" className="text-xl  font-normal text-gray-900 my-1 anim-2">
          An{" "}
          <span className="bg-text-1 font-bold text-black bg-primary">
            Informatics Engineering student
          </span>{" "}
          and a{" "}
          <span className="bg-text-2 font-bold text-black bg-primary">
            web developer
          </span>{" "}
          passionate about technology.
        </p>
        <div className="mt-4 inline-flex gap-4">
          <Link href="/resume.pdf">
            <a className="px-3 py-2 bg-custom-dark text-custom-light rounded-md">About me</a>
          </Link>
          <Link href="/resume.pdf">
            <a className="px-3 py-2 bg-custom-dark text-custom-light rounded-md">Resume</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeHeroSection;
