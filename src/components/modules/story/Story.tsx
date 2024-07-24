import Image from "next/image";
import Link from "next/link";

import Ceo from "@/assets/images/story/Ceo.png";
import Linkedin from "@/assets/icons/logo/media/Linkedin-dark.svg";

const Story = () => {
  return (
    <section className="container-xl">
      <div>
        <p className="text-gray-text text-center text-[22px] font-semibold mb-[48px]">
          OUR STORY
        </p>

        <div className="grid grid-cols-2">
          <div className="relative">
            <Image src={Ceo} alt="CEO" />
            <div className="absolute top-0 right-0 w-[250px] flex items-center gap-5 bg-white py-2 px-5 shadow-sm rounded-r-2xl">
              <div>
                <h5>Daniel Odinaka</h5> <p>COO</p>
              </div>
              <Link href={"/"}>
                <Image src={Linkedin} alt="Linkedin" />
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 w-[250px] bg-white py-2 px-5 shadow-sm rounded-r-2xl">
              <div>
                <h5>Jerah Anibor</h5> <p>CEO</p>
              </div>
              <Link href={"/"}>
                <Image src={Linkedin} alt="Linkedin" />
              </Link>
            </div>
          </div>
          <div>
            <p>
              Jerah and Daniel&apos;s passion for a sustainable global payment
              solution has its root in their days of working together as
              software developers. It was at this time they came to understand
              the potential of software to help automate processes that could
              help businesses and people save money save time, and overall have
              a better quality of life.
            </p>
            <p>
              This shared passion led to the creation of Redbiller, the parent
              company behind Waverlite, which has taken advantage of Africa&apos;s
              financial technology revolution. For Jerah and Daniel, the goal is
              to provide individuals and businesses with hands-on financial
              tools to explore, expand, and thrive globally.
            </p>
          </div>
        </div>

        <p>
          &quot;From an idea in our minds to a solution in your hands, Waverlite
          opens you to a world of endless possibilities in global payments. We
          are ready.&quot;
        </p>
      </div>
    </section>
  );
};

export default Story;
