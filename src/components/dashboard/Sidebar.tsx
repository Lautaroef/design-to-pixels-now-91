import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-50 w-full mx-auto">
      <nav className="bg-[rgba(0,0,0,0)] flex flex-col items-stretch justify-center p-4">
        <div className="bg-[rgba(0,0,0,0)] w-full pb-4">
          <div className="bg-blue-50 flex items-stretch gap-3 text-base text-[rgba(48,100,161,1)] font-medium whitespace-nowrap pl-4 pr-[45px] py-3 rounded-lg max-md:pr-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/724ade27725988d706a0c264c328361b2f087471?placeholderIfAbsent=true"
              alt="Dashboard icon"
              className="aspect-[1.12] object-contain w-[18px] shrink-0 my-auto"
            />
            <span className="bg-[rgba(0,0,0,0)] pt-0.5 pb-2.5">Dashboard</span>
          </div>
          <div className="flex w-full flex-col mt-[18px] pl-4 pr-[45px] max-md:pr-5">
            <a href="#" className="flex w-[98px] items-stretch gap-3">
              <div className="flex min-h-4 items-center overflow-hidden justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/4bf924a823c1588c86e05deabda48a3cd259837d?placeholderIfAbsent=true"
                  alt="Meetings icon"
                  className="aspect-[1.12] object-contain w-[18px] self-stretch my-auto"
                />
              </div>
              <span className="text-gray-700 text-base font-normal leading-none">
                Meetings
              </span>
            </a>
            <a href="#" className="flex w-[93px] items-stretch gap-3 mt-[34px]">
              <div className="flex min-h-4 items-center overflow-hidden justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/e13603cc22806d286daccdaf59bdc175833a561a?placeholderIfAbsent=true"
                  alt="Calendar icon"
                  className="aspect-[0.87] object-contain w-3.5 self-stretch my-auto"
                />
              </div>
              <span className="text-gray-700 text-base font-normal leading-none">
                Calendar
              </span>
            </a>
            <a href="#" className="flex w-[99px] items-stretch gap-3 mt-[34px]">
              <div className="flex min-h-4 items-center overflow-hidden justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/986d8b8d9e2fb2b05eb4ee0ce1606d171e94abf1?placeholderIfAbsent=true"
                  alt="Contacts icon"
                  className="aspect-[1.25] object-contain w-5 self-stretch my-auto"
                />
              </div>
              <span className="text-gray-700 text-base font-normal leading-none">
                Contacts
              </span>
            </a>
            <a href="#" className="flex w-24 items-stretch gap-3 mt-[34px]">
              <div className="flex min-h-4 items-center overflow-hidden justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/fd4d1ebcdfb5c54330c401e14560bf1b5ac3e2d3?placeholderIfAbsent=true"
                  alt="Analytics icon"
                  className="aspect-[1] object-contain w-4 self-stretch my-auto"
                />
              </div>
              <span className="text-gray-700 text-base font-normal leading-none">
                Analytics
              </span>
            </a>
            <a href="#" className="flex w-full items-stretch gap-3 mt-[34px]">
              <div className="flex min-h-4 items-center overflow-hidden justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/fcaca9fa2d8fbfcc71e8e64090e58222f81af161?placeholderIfAbsent=true"
                  alt="History icon"
                  className="aspect-[1] object-contain w-4 self-stretch my-auto"
                />
              </div>
              <span className="text-gray-700 text-base font-normal leading-none grow shrink w-[116px]">
                Meeting History
              </span>
            </a>
          </div>
        </div>
      </nav>
      <div className="bg-[rgba(0,0,0,0)] flex w-full items-stretch gap-3 mt-[947px] p-8 max-md:mt-10 max-md:px-5">
        <div className="flex min-h-4 items-center overflow-hidden justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b4534c558efd4275a12dd4af6aa3374f/b6d2d539fed837c3dacae84b903a9c9b1c96f95f?placeholderIfAbsent=true"
            alt="Support icon"
            className="aspect-[1] object-contain w-4 self-stretch my-auto"
          />
        </div>
        <span className="text-gray-700 text-base font-normal leading-none grow shrink w-40">
          Help & Support
        </span>
      </div>
    </aside>
  );
};
