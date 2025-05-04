import React from "react";
import { RewindCard } from "./RewindCard";

export const RecentMeetingRewinds: React.FC = () => {
  const rewinds = [
    {
      date: "Yesterday, 2:30 PM",
      title: "Marketing Strategy Review",
      duration: "45 min",
      participantsImage: "https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/f7dd6a016c14e28556a2447e5b0a52aeb6a13459?placeholderIfAbsent=true",
    },
    {
      date: "May 3, 2025, 10:00 AM",
      title: "Q2 Planning Session",
      duration: "1h 15min",
      participantsImage: "https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/e395f1e2364c4b7340a1db69e070b05d6d1789b9?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="bg-[rgba(0,0,0,0)] w-full mt-10 max-md:max-w-full">
      <div className="bg-[rgba(0,0,0,0)] flex w-full items-stretch gap-5 flex-wrap justify-between py-1 max-md:max-w-full max-md:mr-0.5">
        <h2 className="text-gray-800 text-xl font-semibold leading-none">
          Recent Meeting Rewinds
        </h2>
        <a href="#" className="flex items-stretch gap-2">
          <span className="text-[rgba(48,100,161,1)] text-base font-normal leading-none">
            View all
          </span>
          <div className="flex min-h-3 items-center overflow-hidden justify-center mt-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/09672bbfc891b437013aa79a9cbbe13de9881493?placeholderIfAbsent=true"
              alt="Arrow right"
              className="aspect-[0.58] object-contain w-[7px] self-stretch my-auto"
            />
          </div>
        </a>
      </div>
      <div className="bg-[rgba(0,0,0,0)] mt-[15px] p-0.5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {rewinds.map((rewind, index) => (
            <div key={index} className="w-6/12 max-md:w-full max-md:ml-0">
              <RewindCard {...rewind} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
