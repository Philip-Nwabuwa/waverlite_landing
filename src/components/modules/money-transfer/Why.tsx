import Image from "next/image";

const Why = () => {
  return (
    <section className="container-xl flex flex-col justify-center text-center">
      <div className="gridWhy hidden lg:flex flex-col">
        <h3 className="lg:text-[40px] text-[20px] font-bold mb-[36px]">
          Why Waverlite?
        </h3>
        <div className="flex flex-col gap-6">
          <ul className="flex items-center justify-center gap-6">
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image
                unoptimized
                src={
                  "https://res.cloudinary.com/w22/wlt-website/icons/Star_8.png"
                }
                width={100}
                height={100}
                className="size-[20px]"
                alt={"star"}
              />
              <p>100% Digital Transfers</p>
            </li>
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image
                unoptimized
                src={
                  "https://res.cloudinary.com/w22/wlt-website/icons/Star_8.png"
                }
                width={100}
                height={100}
                className="size-[20px]"
                alt={"star"}
              />{" "}
              <p>The best exchange rates</p>
            </li>
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image
                unoptimized
                src={
                  "https://res.cloudinary.com/w22/wlt-website/icons/Star_8.png"
                }
                width={100}
                height={100}
                className="size-[20px]"
                alt={"star"}
              />{" "}
              <p>Anti-fraud protection</p>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-6">
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image
                unoptimized
                src={
                  "https://res.cloudinary.com/w22/wlt-website/icons/Star_8.png"
                }
                width={100}
                height={100}
                className="size-[20px]"
                alt={"star"}
              />{" "}
              <p>100% Digital Transfers</p>
            </li>
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image
                unoptimized
                src={
                  "https://res.cloudinary.com/w22/wlt-website/icons/Star_8.png"
                }
                width={100}
                height={100}
                className="size-[20px]"
                alt={"star"}
              />{" "}
              <p>Fair and transparent transfer fees</p>
            </li>
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image
                unoptimized
                src={
                  "https://res.cloudinary.com/w22/wlt-website/icons/Star_8.png"
                }
                width={100}
                height={100}
                className="size-[20px]"
                alt={"star"}
              />{" "}
              <p>Anti-fraud protection</p>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-6">
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image
                unoptimized
                src={
                  "https://res.cloudinary.com/w22/wlt-website/icons/Star_8.png"
                }
                width={100}
                height={100}
                className="size-[20px]"
                alt={"star"}
              />{" "}
              <p>100% Digital Transfers</p>
            </li>
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image
                unoptimized
                src={
                  "https://res.cloudinary.com/w22/wlt-website/icons/Star_8.png"
                }
                width={100}
                height={100}
                className="size-[20px]"
                alt={"star"}
              />{" "}
              <p>The best exchange rates</p>
            </li>
            <li className="bg-[#E9EAEA] flex gap-4 px-6 py-3 rounded-full border border-[#525555] border-solid">
              <Image
                unoptimized
                src={
                  "https://res.cloudinary.com/w22/wlt-website/icons/Star_8.png"
                }
                width={100}
                height={100}
                className="size-[20px]"
                alt={"star"}
              />{" "}
              <p>Anti-fraud protection</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Why;
