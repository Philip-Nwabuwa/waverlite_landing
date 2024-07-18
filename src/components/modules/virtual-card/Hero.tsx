import Link from "next/link";

const Hero = () => {
  return (
    <section className="container-xl virtualCardBgLg">
      <div className="grid grid-cols-2 gap-6 pt-[200px]">
        <div>
          <p className="text-gray-text font-bold text-[20px]">
            WAVERLITE DOLLAR CARD
          </p>
          <h1 className="text-[84px] text-[#E9EAEA] font-bold my-6 leading-[94px]">
            Waverlite Virtual Debit Cards
          </h1>
          <h2 className="text-[26px] text-[#525555] font-bold">
            Waverlite virtual debit cards offer secure and convenient payment
            management. Perfect for online shopping and subscriptions, they give
            you full spending control.
          </h2>
          <Link href={"/"}>
            <button className="w-fit mt-12 py-2 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold">
              Get Started Now
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
