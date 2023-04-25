import Quoteicon from "./icon/quoteicon";
import Playicon from "./icon/playicon";
import Medibg from "../assets/img/mediabg.png";
import Usevid from "../assets/img/usedvid.mp4";
import SwiperImg from "../assets/img/swiper.png";

import { useState } from "react";

const Feature4 = () => {
  const [value, setValue] = useState(0);
  console.log(value);

  return (
    <section>
      <div className="">
        <div className="h-[596px] w-[1440px] bg-[#F4511E12] justify-between flex">
          <div className="relative flex items-center">
            <div className="absolute top-[70px] opacity-50 left-[87px]">
              <Quoteicon />
            </div>
            <div className="ml-[129px]">
              <div className={`${value == 1 ? "opacity-0" : "opacity-100"}`}>
                <h2 className="h-[216px] w-[635px] font-primary font-normal text-[21px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  interdum nisl et nunc facilisis, a commodo eros mollis. Nunc
                  vel pellentesque est. Curabitur at odio sit amet libero
                  vulputate efficitur ac nec justo. Nulla vitae mauris quam.
                  Nulla quam massa, faucibus id pretium ac, mattis eu velit.
                  Donec sed risus a lacus fringilla finibus.
                </h2>
                {/* swiper */}
                <div className="h-[60px]">
                  <div className="flex gap-[19px] mt-[30px]">
                    {" "}
                    <img src={SwiperImg} alt="" />{" "}
                    <div className="flex flex-col gap-[1px]">
                      <p className="text-[#F4511E] font-primary font-bold text-[18px]">
                        Harry Wilson
                      </p>
                      <p className="font-primary font-normal text-[16px]">
                        Property Owner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[5px] mt-[50px] justify-center">
                <div
                  className={`${
                    value == 0 ? " bg-[#F4511E]" : "bg-slate-400"
                  } h-[15px] w-[15px] hover:bg-[#F4511E] cursor-pointer border rounded-[50%] `}
                  onClick={() => setValue(0)}
                ></div>
                <div
                  className={`${
                    value == 1 ? " bg-[#F4511E]" : "bg-slate-400"
                  } h-[15px] w-[15px] hover:bg-[#F4511E] cursor-pointer border rounded-[50%] `}
                  onClick={() => setValue(1)}
                ></div>
                <div
                  className={`${
                    value == 2 ? "bg-[#F4511E]" : "bg-slate-400"
                  } h-[15px] w-[15px] hover:bg-[#F4511E] cursor-pointer border rounded-[50%] `}
                  onClick={() => setValue(2)}
                ></div>
              </div>
            </div>
          </div>
          <div className="w-[638px] relative h-[590px]">
            <div className="absolute top-[40%] right-[40%]">
              <Playicon />
            </div>
            <video
              className="w-[638px] h-[590px]"
              src={Usevid}
              controls
              poster={Medibg}
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature4;
