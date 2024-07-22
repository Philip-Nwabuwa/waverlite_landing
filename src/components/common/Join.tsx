import Link from "next/link";

const Join = () => {
  return (
    <section className="container-xl flex flex-col items-center justify-center gap-8">
      <h4 className="lg:text-[80px] text-[40px] text-center font-bold lg:leading-[80px] leading-[50px]">
        Join the Waverlite <br /> Community
      </h4>
      <p className="w-full max-w-[1032px] text-center text-[#6E7071] lg:text-[26px] text-lg font-semibold leading-[32px]">
        Travel the world confidently with Waverlite. Whether you&apos;re
        exploring new cities, working abroad, or simply enjoying a vacation,
        Waverlite ensures you can spend like a local without any hassle.
      </p>
      <Link href={"/"} className="w-full flex justify-center">
        <button className="w-fit mt-12 py-3 px-6 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold border-[#272A2B] border-solid border-b-4 border-r-4">
          Get Started Now
        </button>
      </Link>
    </section>
  );
};

export default Join;
