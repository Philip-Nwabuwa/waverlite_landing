"use client";

import { ChevronDown, Mail } from "lucide-react";
import { FormEvent, SetStateAction, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const [roleIsOpen, setRoleIsOpen] = useState(false);
  const [experienceIsOpen, setExperienceIsOpen] = useState(false);
  const [countryIsOpen, setCountryIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Select your role");
  const [selectedCountry, setSelectedCountry] = useState("CA");
  const [selectedExperience, setSelectedExperience] = useState(
    "Select your experience"
  );

  const firstNameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLTextAreaElement>(null);
  const portfolioRef = useRef<HTMLInputElement>(null);

  const roles = [
    { value: "developer", label: "Developer" },
    { value: "designer", label: "Designer" },
    { value: "product-manager", label: "Product Manager" },
    { value: "qa-engineer", label: "QA Engineer" },
    { value: "data-analyst", label: "Data Analyst" },
    { value: "sales", label: "Sales" },
  ];

  const countries = [
    { value: "ca", label: "CA" },
    { value: "ng", label: "NG" },
    { value: "uk", label: "UK" },
    { value: "us", label: "US" },
    { value: "au", label: "AU" },
    { value: "in", label: "IN" },
    { value: "de", label: "DE" },
    { value: "fr", label: "FR" },
  ];

  const experiences = [
    { value: "junior", label: "Junior" },
    { value: "mid", label: "Mid" },
    { value: "senior", label: "Senior" },
    { value: "lead", label: "Lead" },
  ];

  const toggleRoleDropdown = () => setRoleIsOpen(!roleIsOpen);
  const toggleContryDropdown = () => setCountryIsOpen(!countryIsOpen);
  const toggleExperienceDropdown = () => setExperienceIsOpen(!experienceIsOpen);

  const handleRoleSelect = (option: { label: SetStateAction<string> }) => {
    setSelectedRole(option.label);
    setRoleIsOpen(false);
  };

  const handleCountrySelect = (option: { label: SetStateAction<string> }) => {
    setSelectedCountry(option.label);
    setCountryIsOpen(false);
  };

  const handleExperienceSelect = (option: {
    label: SetStateAction<string>;
  }) => {
    setSelectedExperience(option.label);
    setExperienceIsOpen(false);
  };

  const areAllFieldsFilled = () => {
    return (
      firstNameRef.current?.value &&
      surnameRef.current?.value &&
      emailRef.current?.value &&
      phoneRef.current?.value &&
      selectedRole !== "Select your role" &&
      selectedExperience !== "Select your experience" &&
      aboutRef.current?.value &&
      portfolioRef.current?.value
    );
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!areAllFieldsFilled()) {
      toast({
        variant: "destructive",
        description: "Please fill in all fields before submitting.",
      });
      return;
    }

    const formData = {
      firstName: firstNameRef.current?.value || "",
      surname: surnameRef.current?.value || "",
      email: emailRef.current?.value || "",
      phone: phoneRef.current?.value || "",
      role: selectedRole || "",
      country: selectedCountry || "",
      experience: selectedExperience || "",
      about: aboutRef.current?.value || "",
      portfolio: portfolioRef.current?.value || "",
    };

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const publicId = process.env.NEXT_PUBLIC_PUBLIC_ID!;

    emailjs.send(serviceId, templateId, formData, publicId).then(
      () => {
        toast({
          description: "Your message has been sent.",
        });
      },
      (error) => {
        toast({
          variant: "destructive",
          description: "An error occured, try again later.",
        });
      }
    );
  };
  return (
    <section className="container-xl flex flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-6 text-center lg:mb-[60px] mb-[20px]">
        <h1 className="text-black text-[40px] lg:text-[60px] font-bold my-6 leading-[70px]">
          Apply Now{" "}
        </h1>
        <p className="w-full text-[#bcbdbd] text-[24px]">
          Ready to join the Waverlite team? <br />
          Fill out the form below to apply.
        </p>
      </div>
      <form
        onSubmit={sendEmail}
        className="w-full max-w-[700px] flex flex-col gap-[60px]"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full relative">
            <p>Firstname</p>
            <input
              className="w-full bg-[#fff] border border-solid border-[#E9EAEA] px-4 py-2 rounded-[8px]"
              placeholder="John"
              ref={firstNameRef}
              type="text"
            />
          </div>
          <div className="w-full relative">
            <p>Surname</p>
            <input
              className="w-full bg-[#fff] border border-solid border-[#E9EAEA] px-4 py-2 rounded-[8px]"
              placeholder="Doe"
              ref={surnameRef}
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  items-center gap-8">
          <div className="w-full relative">
            <p>Email</p>
            <input
              className="w-full bg-[#fff] border border-solid border-[#E9EAEA] pl-10 pr-4 py-2 rounded-[8px]"
              placeholder="johndoe@email.com"
              ref={emailRef}
              type="email"
            />
            <div className="absolute top-1/2 left-0 ml-2">
              <Mail className="size-6" />
            </div>
          </div>
          <div className="w-full relative">
            <p>Phone number</p>
            <input
              className="w-full bg-[#fff] border border-solid border-[#E9EAEA] pl-[60px] pr-4 py-2 rounded-[8px]"
              placeholder="+1 (555) 000-0000"
              ref={phoneRef}
              type="number"
            />
            <div className="absolute top-1/2 left-0 ml-3">
              <div
                onClick={toggleContryDropdown}
                className="flex items-center gap-1 cursor-pointer"
              >
                <p>{selectedCountry}</p> <ChevronDown className="size-4" />
              </div>
            </div>

            {countryIsOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-[#fff] border-2 border-solid border-[#E9EAEA] rounded-[8px] shadow-lg z-10">
                {countries.map((option) => (
                  <div
                    key={option.value}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCountrySelect(option)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row  items-center gap-8">
          <div className="w-full relative">
            <p>Role</p>
            <div
              className="w-full flex justify-between bg-[#fff] border border-solid border-[#E9EAEA] px-4 py-2 rounded-[8px] cursor-pointer"
              onClick={toggleRoleDropdown}
            >
              <p>{selectedRole}</p>
              <div className="mr-2">
                <ChevronDown className="size-6" />
              </div>
            </div>
            {roleIsOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-[#fff] border-2 border-solid border-[#E9EAEA] rounded-[8px] shadow-lg z-10">
                {roles.map((option) => (
                  <div
                    key={option.value}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleRoleSelect(option)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-full relative">
            <p>Level of Experience</p>
            <div
              className="w-full bg-[#fff] flex justify-between border border-solid border-[#E9EAEA] px-4 py-2 rounded-[8px] cursor-pointer"
              onClick={toggleExperienceDropdown}
            >
              <p>{selectedExperience}</p>
              <div className="mr-2">
                <ChevronDown className="size-6" />
              </div>
            </div>
            {experienceIsOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-[#fff] border border-solid border-[#E9EAEA] rounded-[8px] shadow-lg z-10">
                {experiences.map((option) => (
                  <div
                    key={option.value}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleExperienceSelect(option)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-8">
          <div className="w-full relative">
            <p>
              Tell us a bit about yourself and why you think we should consider
              you
            </p>
            <textarea
              className="w-full bg-[#fff] border border-solid border-[#E9EAEA] px-4 py-2 rounded-[8px]"
              placeholder="A little about the company and the team that you’ll be working with."
              ref={aboutRef}
              rows={3}
            />
          </div>
          <div className="w-full relative">
            <p>Link to your portfolio</p>
            <input
              className="w-full bg-[#fff] border border-solid border-[#E9EAEA] px-4 py-2 rounded-[8px]"
              placeholder="www.johndoe.com"
              ref={portfolioRef}
              type="link"
            />
          </div>
        </div>

        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-[#1E8DCC] text-[#E9EAEA] w-fit rounded-[8px] px-8 py-4"
          >
            Submit Application
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
