import Image from "next/image";

import img1 from "@/assets/images/contact/img1.png";
import img2 from "@/assets/images/contact/img2.png";
import img3 from "@/assets/images/contact/img3.png";
import img4 from "@/assets/images/contact/img4.png";
import mail from "@/assets/images/contact/mail.svg";
import Link from "next/link";

const Contact = () => {
  const contactItems = [
    {
      title: "Enquiries & partnerships",
      content:
        "Is there something missing from our website that you'd like answers to? Or are you interested in partnering with us?",
      email1: "hello@waverlite.email",
      email2: "partners@waverlite.email",
      logo: img1,
    },
    {
      title: "Customer & Tech Support",
      content:
        "Get all the help you need in understanding and navigating your account. Get answers to questions concerning your Waverlite account.",
      email1: "support@waverlite.email",
      email2: "developers@waverlite.email",
      logo: img2,
    },
    {
      title: "Sales",
      content:
        "Find out what factors we consider before issuing a transaction discount or contact us to request a custom pricing if you think that you have all it takes.",
      email1: "sales@waverlite.email",
      email2: "",
      logo: img3,
    },
    {
      title: "Compliance",
      content:
        "Learn about what documents we require based on the type of business that you run and how they affect your use of Redbiller.",
      email1: "compliance@waverlite.email",
      email2: "",
      logo: img4,
    },
  ];
  return (
    <section className="container-xl flex flex-col gap-[28px]">
      {contactItems.map((item, index) => (
        <div
          className="flex flex-col bg-[#E9F4FA] p-[48px] gap-6 border-2 border-solid border-[#B9DCEF] rounded-[48px]"
          key={index}
        >
          <Image src={item.logo} alt={item.title} />
          <h1 className="text-[60px] font-bold">{item.title}</h1>
          <p className="text-[26px] text-gray-text">{item.content}</p>
          <div className="flex gap-[32px]">
            <div className="bg-[#E9F4FA] border-[#B9DCEF] border border-solid rounded-sm flex px-[32px] py-[24px] items-center gap-2">
              <Image src={mail} alt="mail" />
              <Link
                href={"mailto:" + item.email1}
                className="text-[#1E8DCC] text-[26px] hover:underline"
              >
                {item.email1}
              </Link>
            </div>
            {item.email2 && (
              <div className="bg-[#E9F4FA] border-[#B9DCEF] border border-solid rounded-sm flex px-[32px] py-[24px] items-center gap-2">
                <Image src={mail} alt="mail" />

                <Link
                  href={"mailto:" + item.email2}
                  className="text-[#1E8DCC] text-[26px] hover:underline"
                >
                  {item.email2}
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Contact;
