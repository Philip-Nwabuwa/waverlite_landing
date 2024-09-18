import Link from "next/link";

const Hero = () => {
  return (
    <section className="container-xl virtualCardBgLg">
      <div className="grid lg:grid-cols-2 gap-6 pt-[200px] pb-20 lg:pb-40">
        <div>
          <p className="text-white font-bold text-[20px]">
            WAVERLITE DOLLAR CARD
          </p>
          <h1 className="lg:text-[60px] text-[40px] text-[#E9EAEA] font-bold my-6 lg:leading-[94px]">
            Waverlite Virtual Debit Cards
          </h1>
          <h2 className="text-[24px] text-white mb-12">
            Waverlite virtual debit cards offer secure and convenient payment
            management. Perfect for online shopping and subscriptions, they give
            you full spending control.
          </h2>
          <Link
            href={"/"}
            className="w-fit mt-12 py-4 px-8 bg-primary text-[#E9EAEA] rounded-[8px] font-semibold"
          >
            Get Started Now
          </Link>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
