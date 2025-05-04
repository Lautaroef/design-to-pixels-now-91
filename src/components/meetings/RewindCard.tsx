import React from "react";

interface RewindCardProps {
  date: string;
  title: string;
  duration: string;
  participantsImage: string;
}

export const RewindCard: React.FC<RewindCardProps> = ({
  date,
  title,
  duration,
  participantsImage,
}) => {
  return (
    <div className="bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border-gray-100 border w-full mx-auto p-[21px] rounded-xl border-solid max-md:max-w-full max-md:mt-[21px] max-md:px-5">
      <div className="bg-[rgba(0,0,0,0)] flex items-stretch gap-5 text-sm text-gray-500 font-normal flex-wrap justify-between max-md:max-w-full">
        <div className="bg-[rgba(0,0,0,0)] py-1">{date}</div>
        <button aria-label="More options">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/e252cc1caf9583ee5329dac29249ce7a5f966752?placeholderIfAbsent=true"
            alt="More"
            className="aspect-[0.25] object-contain w-1 shrink-0"
          />
        </button>
      </div>
      <h3 className="bg-[rgba(0,0,0,0)] text-lg text-gray-800 font-semibold mt-3 py-[5px] max-md:max-w-full max-md:pr-5">
        {title}
      </h3>
      <div className="bg-[rgba(0,0,0,0)] flex items-stretch gap-3 text-xs text-gray-500 font-normal leading-none flex-wrap mt-1">
        <img
          src={participantsImage}
          alt="Duration"
          className="aspect-[2.33] object-contain w-14 shrink-0"
        />
        <div className="grow shrink w-[429px] basis-auto my-auto max-md:max-w-full">
          {duration}
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] flex w-full items-stretch gap-[40px_100px] flex-wrap mt-3 max-md:max-w-full">
        <button className="bg-[rgba(0,0,0,0)] flex items-stretch gap-[5px] flex-1 px-3 py-2 rounded-lg">
          <div className="flex min-h-3.5 items-center overflow-hidden justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/3b2142a03128ea8126820164193462b07b8f74d3?placeholderIfAbsent=true"
              alt="Replay"
              className="aspect-[0.79] object-contain w-[11px] self-stretch my-auto"
            />
          </div>
          <span className="text-[rgba(48,100,161,1)] text-sm font-normal text-center">
            Replay
          </span>
        </button>
        <button className="bg-[rgba(0,0,0,0)] flex items-stretch gap-[5px] flex-1 px-3 py-2 rounded-lg">
          <div className="flex min-h-3.5 items-center overflow-hidden justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/df0bf2898142c695f4023efe3dfeb0d85c28e058?placeholderIfAbsent=true"
              alt="Summary"
              className="aspect-[0.71] object-contain w-2.5 self-stretch my-auto"
            />
          </div>
          <span className="text-[rgba(48,100,161,1)] text-sm font-normal text-center">
            Summary
          </span>
        </button>
      </div>
    </div>
  );
};
