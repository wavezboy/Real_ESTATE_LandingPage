import Dollaricon from "./icon/dollaricon";
import Badgeicon from "./icon/badgeicon";
import Circleicon from "./icon/circleicon";
import Flowericon from "./icon/flowericon";
import Houseicon from "./icon/houseicon";
import Stackicon from "./icon/stackicon";
import Feature1Img from "../assets/img/Feature1img.png";

const Feature1 = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <h1 className="title font-primary capitalize text-[36px] h-[54px] w-[839px]">
          minimum living cost takes care of everything
          <span className="w-[385px] bg-[#F4511E] block h-[3px]"></span>
        </h1>
        <div className="flex gap-x-[65px]">
          <img
            className="w-[384px] h-[521px] mt-[44px]"
            src={Feature1Img}
            alt=""
          />
          <div className="flex flex-col mt-[85px] gap-y-[92px]">
            <div className="flex gap-x-[88px]">
              <div className="">
                <div className="h-[77px] hover:scale-125 transition-all duration-500 w-[77px] bg-white shadow-xl shadow-gray-300 rounded-[10px] flex items-center justify-center">
                  <Dollaricon />
                </div>
                <h2 className="text-[26px] font-primary font-semibold h-[70px] w-[159px]">
                  Pay as Little as possible!
                </h2>
              </div>
              <div className="">
                <div className="h-[77px] hover:scale-125 transition-all duration-500 w-[77px] bg-white shadow-xl shadow-gray-300 rounded-[10px] flex items-center justify-center">
                  <Houseicon className="" />
                </div>
                <h2 className="text-[26px] font-primary font-semibold h-[70px] w-[190px]">
                  Enjoy wisdom of community!
                </h2>
              </div>
              <div className="">
                <div className="h-[77px] w-[77px] hover:scale-125 transition-all duration-500 bg-white shadow-xl shadow-gray-300 rounded-[10px] flex items-center justify-center">
                  <Stackicon className="" />
                </div>
                <h2 className="text-[26px] font-primary font-semibold h-[70px] w-[294px]">
                  Let's somebody else take care of Landlord!
                </h2>
              </div>
            </div>
            <div className="flex gap-x-[88px]">
              <div className="">
                <div className="h-[77px] w-[77px] hover:scale-125 transition-all duration-500 bg-white shadow-xl shadow-gray-300 rounded-[10px] flex items-center justify-center">
                  <Flowericon className="" />
                </div>
                <h2 className="text-[26px] font-primary font-semibold h-[70px] w-[188px]">
                  Enjoy peaceful Environment!
                </h2>
              </div>
              <div className="">
                <div className="h-[77px] w-[77px] hover:scale-125 transition-all duration-500 bg-white shadow-xl shadow-gray-300 rounded-[10px] flex items-center justify-center">
                  <Badgeicon className="" />
                </div>
                <h2 className="text-[26px] font-primary font-semibold h-[70px] w-[163px]">
                  Stay Safe! Save Money!
                </h2>
              </div>
              <div className="">
                <div className="h-[77px] w-[77px] hover:scale-125 transition-all duration-500 bg-white shadow-xl shadow-gray-300 rounded-[10px] flex items-center justify-center">
                  <Circleicon className="" />
                </div>
                <h2 className="text-[26px] font-primary font-semibold h-[70px] w-[170px]">
                  Pay for what you use !
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
