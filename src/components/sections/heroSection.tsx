import { Button } from "../ui/button";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import HoverContainer from "../common/hoverContainer";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section grid grid-cols-1 lg:grid-cols-3 gap-5 mx-6 sm:mx-20 xl:mx-auto my-20 lg:my-56 max-w-[1150px]"
    >
      <div className="col-span-1 text-center lg:text-start lg:col-span-2 order-2 lg:order-1 flex flex-col gap-7 font-semibold">
        <h1 className="text-3xl lg:text-5xl">
          Hello, I am{" "}
          <span className="text-red-main font-bold">Joakim Dahlstrom</span>
        </h1>
        <p className="text-xl lg:text-3xl">
          I&apos;m a <span className="text-red-main">Full Stack Developer</span>{" "}
          skilled in
          <span className="text-red-main"> React</span>,{" "}
          <span className="text-red-main">NextJS</span>,{" "}
          <span className="text-red-main">JavaScript</span>,{" "}
          <span className="text-red-main">TypeScript</span> and basic on{" "}
          <span className="text-red-main">Golang</span>. I work with agile
          methodology.
        </p>
        <p className="text-xl lg:text-3xl">
          Let&apos;s create something great together!
        </p>

        <div className="flex flex-col gap-1">
          <p>Contact me</p>
          <div className="flex items-center flex-col lg:flex-row gap-5 lg:gap-10">
            <div className="flex gap-3 text-lg">
              <Button
                asChild
                variant="link"
                className="px-0 text-white hover:text-red-main cursor-pointer"
              >
                <a href="tel:0882882572" className="flex items-center gap-3">
                  <FaPhoneAlt />
                  088-288-2572
                </a>
              </Button>
              <Button
                asChild
                variant="link"
                className="px-0 text-white hover:text-red-main cursor-pointer"
              >
                <a
                  target="_blank"
                  href="mailto:joakim.n.dahlstrom@gmail.com"
                  className="flex items-center gap-3"
                >
                  <MdEmail />
                  joakim.n.dahlstrom@gmail.com
                </a>
              </Button>
            </div>
            <div className="flex gap-5 text-3xl">
              <a
                className="hover:text-red-main transition"
                href="https://www.linkedin.com/in/joakim-dahlstrom-250303264/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                className="hover:text-red-main transition"
                href="https://github.com/lethal1147"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className="hover:text-red-main transition"
                href="https://www.facebook.com/uykim.kim/"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <Button
          asChild
          className="font-bold max-w-40 self-center lg:self-start"
        >
          <a
            href="https://drive.google.com/file/d/1SHBp79ZpdqY75ZHtJgS982S6PDQqppr4/view?usp=sharing"
            target="_blank"
          >
            My resume!
          </a>
        </Button>
      </div>

      <div className="col-span-1 order-1 lg:order-2 flex justify-center">
        <div></div>
        <HoverContainer
          width={350}
          height={350}
          imageAlt="joakim dahlstrom"
          imagePath="/images/profile-image.jpg"
        />
      </div>
    </section>
  );
}
