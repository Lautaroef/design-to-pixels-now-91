import React from "react";
import { MeetingCard } from "./MeetingCard";

export const UpcomingMeetings: React.FC = () => {
  const meetings = [
    {
      time: "10:30 AM - 11:30 AM",
      title: "Product Development Sync",
      description:
        "Weekly discussion of product roadmap and development updates",
      participants: 5,
      participantsImage: "https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/ba5c927575215cb7ad7cd23647789a0e13162716?placeholderIfAbsent=true",
    },
    {
      time: "2:00 PM - 3:00 PM",
      title: "Client Presentation: Acme Co.",
      description: "Proposal presentation for new marketing campaign",
      participants: 3,
      participantsImage: "https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/be72aa0384fc9ce1c32cd4d0c3e4651d2c18eb84?placeholderIfAbsent=true",
    },
    {
      time: "4:30 PM - 5:00 PM",
      title: "Team Retrospective",
      description: "Monthly team review and feedback session",
      participants: 7,
      participantsImage: "https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/fb383e9677b02aed7c12015eb937895bc061b716?placeholderIfAbsent=true",
    },
  ];

  return (
    <section>
      <div className="bg-[rgba(0,0,0,0)] flex w-full items-stretch gap-5 flex-wrap justify-between py-1 max-md:max-w-full">
        <h2 className="text-gray-800 text-xl font-semibold leading-none">
          Upcoming Meetings
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
      <div className="bg-[rgba(0,0,0,0)] w-full overflow-hidden mt-4 pb-[13px] max-md:max-w-full">
        <div className="bg-[rgba(0,0,0,0)] py-0.5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {meetings.map((meeting, index) => (
              <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
                <MeetingCard {...meeting} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
