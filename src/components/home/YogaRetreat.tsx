import React from "react";
import Image from "next/image";
import yogaRetreat from "@/assets/home/yogaRetreat.png";

const YogaRetreat = () => {
  return (
    <div className="bg-[#EAE6E1] h-[80vh]  py-16 relative">
      <Image
        src={yogaRetreat}
        alt="yogaretreat"
        fill
        className="rounded-t-[64px] w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="kaftan-text text-center text-white text-[40px] px-10">
          &quot;YOGA IS A LIGHT. ONCE LIGHTED. IT NEVER FADES OUT. THE BETTER
          YOU PRACTICE. THE BRIGHTER THE LIGHT&quot;
        </p>

        <div className="bg-[#F57D49] rounded-full size-4 my-8"></div>
        <p className=" text-center text-white text-[20px] ">B.K.S IYENGAR</p>
      </div>
    </div>
  );
};

export default YogaRetreat;
