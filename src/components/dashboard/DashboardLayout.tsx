import React from "react";
import { Sidebar } from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div className="bg-white overflow-hidden pl-4 pt-[17px]">
      <header className="bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex max-w-full w-[1440px] items-stretch gap-5 flex-wrap justify-between px-6 py-4 max-md:px-5">
        <div className="bg-[rgba(0,0,0,0)] my-auto pt-px pb-[13px] px-px text-2xl text-[rgba(48,100,161,1)] font-bold">
          MeetFlow
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/bf0c93b46f7f2e4cd3025086878662e4385761b9?placeholderIfAbsent=true"
          alt="Logo"
          className="aspect-[2.95] object-contain w-[118px] shrink-0 max-w-full"
        />
      </header>
      <div className="bg-[rgba(0,0,0,0)] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[18%] max-md:w-full max-md:ml-0">
            <Sidebar />
          </div>
          <div className="w-[82%] ml-5 max-md:w-full max-md:ml-0">
            <main className="bg-gray-50 grow overflow-hidden w-full pt-8 pb-[661px] px-[30px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
