import Image from "next/image";
import Link from "next/link";

import mainImage from "@/assets/images/story/Hero 1.png";
import jerah from "@/assets/images/story/jerahLink.png";
import daniel from "@/assets/images/story/danielLink.png";

const Story = () => {
  return (
    <section className="container-xl">
      <div className="flex flex-col justify-center items-center">
        <div className="grid lg:grid-cols-2 items-center lg:gap-[82px] gap-10">
          <div className="w-fit">
            <div className="relative">
              <Image
                src={mainImage}
                width={400}
                height={500}
                className="rounded-[8px] lg:w-[560px] lg:h-[525px]"
                alt="CEO"
              />
              <Link
                href={"https://www.linkedin.com/in/daniel-odinaka-226258b6/"}
                className="absolute left-0 bottom-0"
              >
                <Image src={daniel} alt="Linkedin" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/jerahanibor/"}
                className="absolute bottom-0 right-0"
              >
                <Image src={jerah} alt="Linkedin" />
              </Link>
            </div>
          </div>
          <div className="w-full max-w-[620px]">
            <div className="h-full flex flex-col w-full max-w-[511px]">
              <h4 className="text-[32px] font-semibold lg:mb-6 mb-4">
                OUR STORY
              </h4>
              <p className="text-[15px] mb-4 leading-7">
                Jerah and Daniel&apos;s passion for a sustainable global payment
                solution has its root in their days of working together as
                software developers. It was at this time they came to understand
                the potential of software to help automate processes that could
                help businesses and people save money save time, and overall
                have a better quality of life.
              </p>
              <p className="text-[15px] leading-7">
                This shared passion led to the creation of Redbiller, the parent
                company behind Waverlite, which has taken advantage of
                Africa&apos;s financial technology revolution. For Jerah and
                Daniel, the goal is to provide individuals and businesses with
                hands-on financial tools to explore, expand, and thrive
                globally.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center text-center">
          <p className="w-full max-w-[800px] lg:text-[26px] text-[20px] font-bold mt-12">
            &quot;From an idea in our minds to a solution in your hands,
            Waverlite opens you to a world of endless possibilities in global
            payments. We are ready.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
