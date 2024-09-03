"use client";

import { ChevronDown, Mail } from "lucide-react";
import { SetStateAction, useState } from "react";

const Contact = () => {
  const [roleIsOpen, setRoleIsOpen] = useState(false);
  const [experienceIsOpen, setExperienceIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Select your role");
  const [selectedExperience, setSelectedExperience] = useState(
    "Select your experience"
  );
  const roles = [
    { value: "developer", label: "Developer" },
    { value: "designer", label: "Designer" },
    { value: "product-manager", label: "Product Manager" },
    { value: "qa-engineer", label: "QA Engineer" },
    { value: "data-analyst", label: "Data Analyst" },
    { value: "sales", label: "Sales" },
  ];

  const experiences = [
    { value: "junior", label: "Junior" },
    { value: "mid", label: "Mid" },
    { value: "senior", label: "Senior" },
    { value: "lead", label: "Lead" },
  ];

  const toggleRoleDropdown = () => setRoleIsOpen(!roleIsOpen);
  const toggleExperienceDropdown = () => setExperienceIsOpen(!experienceIsOpen);

  const handleRoleSelect = (option: { label: SetStateAction<string> }) => {
    setSelectedRole(option.label);
    setRoleIsOpen(false);
  };

  const handleExperienceSelect = (option: {
    label: SetStateAction<string>;
  }) => {
    setSelectedExperience(option.label);
    setExperienceIsOpen(false);
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
      <div className="w-full max-w-[700px] flex flex-col gap-[60px]">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full relative">
            <p>Firstname</p>
            <input
              className="w-full bg-[#fff] border border-solid border-[#E9EAEA] px-4 py-2 rounded-[8px]"
              placeholder="John"
              type="text"
            />
          </div>
          <div className="w-full relative">
            <p>Surname</p>
            <input
              className="w-full bg-[#fff] border border-solid border-[#E9EAEA] px-4 py-2 rounded-[8px]"
              placeholder="Doe"
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
              type="number"
            />
            <div className="absolute top-1/2 left-0 ml-3">
              <div className="flex items-center gap-1">
                <p>US</p> <ChevronDown className="size-4" />
              </div>
            </div>
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
              rows={3}
            />
          </div>
          <div className="w-full relative">
            <p>Link to your portfolio</p>
            <input
              className="w-full bg-[#fff] border border-solid border-[#E9EAEA] px-4 py-2 rounded-[8px]"
              placeholder="www.johndoe.com"
              type="link"
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-[#1E8DCC] text-[#E9EAEA] w-fit rounded-[8px] px-8 py-2">
            Submit Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
