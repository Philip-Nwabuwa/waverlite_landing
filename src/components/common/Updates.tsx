import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    body: "Site underconstruction! 🚧 Exciting updates coming soon! 🚀",
  },
  {
    body: "Site underconstruction! 🚧 Exciting updates coming soon! 🚀",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({ body }: { body: string }) => {
  return (
    <figure
      className={cn(
        "relative w-full cursor-pointer overflow-hidden py-4 px-10"
      )}
    >
      <blockquote className="text-xl font-bold">{body}</blockquote>
    </figure>
  );
};

const Updates = () => {
  return (
    <div className="relative hidden lg:flex w-full py-[70px] flex-col items-center justify-center overflow-hidden">
      <Marquee
        pauseOnHover
        className="absolute top-1/2 -translate-y-1/2 bg-[#0B0B0B] text-white h-[80px] [--duration:20s] origin-center rotate-2 z-10"
      >
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        pauseOnHover
        className="absolute top-1/2 -translate-y-1/2 bg-[#68B3DD] h-[80px] [--duration:20s] -rotate-2"
      >
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 "></div>
    </div>
  );
};

export default Updates;
