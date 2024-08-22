import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "ANDREW, PRODUCT DESIGNER",
    body: "Working at Waverlite has been an amazing journey. The team is supportive, and the projects are challenging and rewarding. - ",
  },
  {
    name: "PHILIP, SOFTWARE ENGINEER",
    body: "Working at Waverlite has been an amazing journey. The team is supportive, and the projects are challenging and rewarding. - ",
  },
  {
    name: "Alex, PRODUCT MANAGER",
    body: "Working at Waverlite has been an amazing journey. The team is supportive, and the projects are challenging and rewarding. - ",
  },
  {
    name: "A, PRODUCT DESIGNER",
    body: "Working at Waverlite has been an amazing journey. The team is supportive, and the projects are challenging and rewarding. - ",
  },
  {
    name: "B, SOFTWARE ENGINEER",
    body: "Working at Waverlite has been an amazing journey. The team is supportive, and the projects are challenging and rewarding. - ",
  },
  {
    name: "C, PRODUCT MANAGER",
    body: "Working at Waverlite has been an amazing journey. The team is supportive, and the projects are challenging and rewarding. - ",
  },
];
const firstRow = reviews.slice(0, reviews.length / 2);
const bgColors = [
  "bg-[#1E8DCC]",
  "bg-[#272A2B]",
  "bg-[#E9F4FA]",
  "bg-[#1E8DCC]",
  "bg-[#272A2B]",
  "bg-[#E9F4FA]",
];
const textColors = [
  "text-white",
  "text-white",
  "text-black",
  "text-white",
  "text-white",
  "text-black",
];

const ReviewCard = ({
  name,
  body,
  bgColor,
  textColor,
}: {
  name: string;
  body: string;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <figure
      className={cn(
        `relative flex flex-col justify-between w-[400px] cursor-pointer overflow-hidden rounded-xl border p-4 ${bgColor} ${textColor}`
      )}
    >
      <blockquote className="text-xl mb-8">{body}</blockquote>
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className={`text-[24px] ${textColor} font-bold`}>
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};
const TeamBuzz = () => {
  return (
    <section>
      <div className="w-full flex justify-center lg:mb-[76px] mb-10">
        <h4 className="lg:text-[80px] text-[40px] text-center font-bold lg:leading-[80px] leading-[50px]">
          What Our Team Says{" "}
        </h4>
      </div>
      <div className="relative flex w-full py-[150px] flex-col items-center justify-center overflow-hidden">
        <Marquee
          pauseOnHover
          className="absolute top-1/2 -translate-y-1/2 h-[300px] [--duration:10s]"
        >
          {firstRow.map((review, index) => (
            <ReviewCard
              key={review.name}
              bgColor={bgColors[index % bgColors.length]}
              textColor={textColors[index % textColors.length]}
              {...review}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TeamBuzz;
