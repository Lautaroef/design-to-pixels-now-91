import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { UpcomingMeetings } from "@/components/meetings/UpcomingMeetings";
import { RecentMeetingRewinds } from "@/components/meetings/RecentMeetingRewinds";

const Index: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="bg-[rgba(0,0,0,0)] w-full max-md:max-w-full">
        <div className="bg-[rgba(0,0,0,0)] flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full max-md:mr-0.5">
          <div className="bg-[rgba(0,0,0,0)] flex flex-col items-stretch leading-none pr-[5px] pb-[7px]">
            <h1 className="text-gray-800 text-3xl font-bold">
              Good morning, Michael
            </h1>
            <div className="text-gray-600 text-base font-normal mt-3">
              Tuesday, May 4, 2025
            </div>
          </div>
          <button className="bg-[rgba(161,216,132,1)] flex items-stretch gap-[9px] text-base text-white font-medium text-center my-auto px-6 py-[15px] rounded-lg max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/810d25ca92886acfbcc274b13e6e5126b7272b1b?placeholderIfAbsent=true"
              alt="Schedule"
              className="aspect-[0.87] object-contain w-3.5 shrink-0"
            />
            <span className="basis-auto">Schedule New Meeting</span>
          </button>
        </div>
        <UpcomingMeetings />
        <RecentMeetingRewinds />
      </div>
    </DashboardLayout>
  );
};

export default Index;
