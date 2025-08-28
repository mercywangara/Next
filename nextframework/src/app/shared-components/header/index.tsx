const TopBanner = () => {
  return (
    <div>
      <div className="w-full bg-black py-2 flex justify-center items-center relative">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="">ShopNow</a>
          </span>
      </div>
    </div>
  );
};

export default TopBanner;

/*"use client"

import Link from "next/link";

const TopBanner = () => {
  return (
    <div className="w-full bg-black py-2 flex justify-center items-center relative">
      <div className="absolute right-8 flex items-center gap-2">
        <span className="text-white text-[18px]">English</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 8L10 13L15 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="w-full flex justify-center">
        <span className="text-white text-[20px] font-light">
          Summer Sale For All Swim Suits And Free Express Delivery &ndash; OFF 50%!{" "}
          <Link href="#" className="font-bold underline">ShopNow</Link>
        </span>
      </div>
    </div>
  );
};

export default TopBanner; */