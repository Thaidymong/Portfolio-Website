import Image from "next/image";
import bg from "../../../../public/background/bg6.jpg";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Dymong Thai
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Let is Connect! For any inquiries, collaborations, or just to say
            hello, feel free to reach out to me.
          </p>
          <p className="text-center font-light text-sm xs:text-base">
            📧 Email: thaidymong7@gmail.com
          </p>

          <p className="text-center font-light text-sm xs:text-base">
            I look forward to hearing from you!
          </p>
        </div>
      </article>
    </>
  );
}
