import React from "react";

interface MeetingCardProps {
  time: string;
  title: string;
  description: string;
  participants: number;
  participantsImage: string;
}

export const MeetingCard: React.FC<MeetingCardProps> = ({
  time,
  title,
  description,
  participants,
  participantsImage,
}) => {
  return (
    <div className="bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border-gray-100 border w-full mx-auto p-[21px] rounded-xl border-solid max-md:mt-5 max-md:px-5">
      <div className="bg-[rgba(0,0,0,0)] flex items-stretch gap-5 text-sm text-[rgba(48,100,161,1)] font-normal justify-between">
        <div className="bg-blue-100 pt-[5px] pb-[13px] px-3 rounded-full">
          {time}
        </div>
        <button aria-label="More options">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/db1169c1018bdb6dde6f92d2bb1acb959ff18c2c?placeholderIfAbsent=true"
            alt="More"
            className="aspect-[0.25] object-contain w-1 shrink-0"
          />
        </button>
      </div>
      <h3 className="bg-[rgba(0,0,0,0)] text-lg text-gray-800 font-semibold mt-3 py-1.5 max-md:pr-5">
        {title}
      </h3>
      <p className="bg-[rgba(0,0,0,0)] text-sm text-gray-500 font-normal mt-1 pr-[54px] py-1 max-md:pr-5">
        {description}
      </p>
      <div className="bg-[rgba(0,0,0,0)] flex items-stretch gap-2 text-sm text-gray-500 font-normal leading-none mt-4">
        <img
          src={participantsImage}
          alt="Participants"
          className="aspect-[3.25] object-contain w-[104px] shrink-0 max-w-full"
        />
        <div className="grow shrink w-[205px] my-auto">
          {participants} participants
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] flex w-full items-stretch gap-5 justify-between mt-4">
        <button className="bg-[rgba(0,0,0,0)] flex items-stretch gap-1 my-auto px-3 py-2.5 rounded-lg">
          <div className="flex min-h-3.5 items-center overflow-hidden justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/73f8b3c70835238b43f70f164daf141ea69b45f4?placeholderIfAbsent=true"
              alt="Insights"
              className="aspect-[0.79] object-contain w-[11px] self-stretch my-auto"
            />
          </div>
          <span className="text-[rgba(48,100,161,1)] text-sm font-normal text-center basis-auto">
            Attendee Insights
          </span>
        </button>
        <button className="bg-[rgba(48,100,161,1)] text-base text-white font-normal whitespace-nowrap text-center pt-2.5 pb-[18px] px-[21px] rounded-lg max-md:px-5">
          Join
        </button>
      </div>
    </div>
  );
};
