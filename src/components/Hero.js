import rectangle from "../assets/img/Rectangle1.svg";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="h-[790px] w-[1440px] bg-hero top-0">
      <div className="">
        <div className=" flex justify-between">
          <h2 className="capitalize h-[210px] w-[584px] ml-[120px] mt-[291px] font-bold text-[52px] text-white">
            The most affortable place to stay in the san franciso bay area
          </h2>
          <div className="">
            <img
              className="h-[340px] w-[408px] mt-[171px] mr-[200px]"
              src={rectangle}
              alt=""
            />
            <div className="h-[88px] w-[408px] bg-[#FFFFFF] rounded-[10px]">
              <div className="w-full h-full flex justify-center items-center">
                <div className="h-[58px] w-[128px] bg-transparent border rounded-l-[10px]">
                  <select className="mt-[15px] ml-[23px]">
                    <option value="All type" selected>
                      All type
                    </option>
                  </select>
                </div>

                <div className="h-[58px] w-[176px] bg-transparent border">
                  <select className="mt-[15px] ml-[23px]">
                    <option value="Neighbourhood" selected>
                      Neighbourhood
                    </option>
                  </select>
                </div>

                <div className="h-[58px] w-[59px] border bg-[#23A6F0] rounded-r-[10px]">
                  <div className="mt-[21px] ml-[21.58px]">
                    <AiOutlineSearch className="text-[16px] text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
