import Image from "next/image";

const Hero = () => {
  return (
    <section className="container-xl mt-[200px]">
      <div className="grid lg:grid-cols-2 items-center gap-2">
        <div>
          <p className="text-gray-text font-bold text-[20px]">
            WAVERLITE LOCATOR
          </p>
          <h1 className="text-[40px] lg:text-[60px] font-bold my-6 lg:leading-[70px]">
            Find Waverlite Supported Businesses Near You
          </h1>
          <h2 className="text-[22px] text-[#525555] font-bold">
            Easily locate stores, restaurants, and more that accept Waverlite
            payments.
          </h2>
        </div>
        <div>
          <Image
            unoptimized
            priority
            src={
              "https://res.cloudinary.com/w22/wlt-website/images/locator/hero.png"
            }
            width={100}
            height={100}
            className="w-full h-full"
            alt={"Globe"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
