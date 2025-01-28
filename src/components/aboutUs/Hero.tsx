import React from "react";



const Hero: React.FC = () => {
  return (
    <div className="bg-[#F67D49] py-[48px] sm:py-[82px] lg:py-[104px] relative ">
      {/* <Image
        src={rightBorder}
        alt="Decorative background"
        className="absolute right-0 top-0 h-full w-auto opacity-50"
      /> */}
      <div className="text-left flex flex-col justify-center items-start max-w-[1280px]  mx-auto lg:px-[16px] sm:px-[24px] px-[16px] ">
        <h1 className="text-white lg:text-[80px] lg:leading-[80px] sm:text-[56px] text-[28px] font-semibold lg:pb-[24px] sm:pb-[16px] pb-[10px] " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          We <span className="text-gray-700 opacity-70 ">Transform</span> Your
          Life, One <span className="text-gray-700 opacity-70">Breath</span> at
          a Time
        </h1>
        <p className=" lg:text-[26px] sm:text-[14px] text-[8px] opacity-70" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1000">
          At Tatsat Yoga School, we guide you on a journey of self-discovery and
          inner peace. Nestled in the spiritual heart of Rishikesh, we combine
          ancient yogic traditions with modern insights to harmonize your body,
          mind, and spirit, empowering you to live a balanced and fulfilling
          life.
        </p>
      </div>
    </div>
  );
};

export default Hero;
