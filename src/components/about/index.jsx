import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Hello, I'm Dymong!
          A passionate Web Developer with a year of hands-on experience in creating engaging and functional web experiences. My expertise lies in blending creative design with robust functionality, ensuring that every project I work on is not only visually captivating but also user-friendly.

          My journey in web development is powered by an array of mystical tools and languages, with JavaScript casting the core of my enchantments. I wield frameworks like React.js, Next.js, and Nest.js with precision, crafting seamless portals (websites) that connect realms (users) across the digital universe. The ancient arts of the Jamstack empower me to create fast, secure, and dynamic experiences.

          Every creation I craft is a fusion of art and technology, designed to push the boundaries of what’s possible on the web. Join me as I continue to explore new spells and technologies, shaping the future of the digital world one project at a time.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,bootstrap,css,docker,figma,git,github,graphql,html,js,mysql,nextjs,nodejs,npm,postgres,react,redux,sass,tailwind,vercel,vscode,yarn,nestjs`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>
      
      </div>
    </section>
  );
};

export default AboutDetails;
