import Feature3img1 from "../assets/img/feature3img1.png";
import Feature3img2 from "../assets/img/feature3img2.png";
import Feature3img3 from "../assets/img/feature3img3.png";
import Feature3img4 from "../assets/img/feature3img.png";

const Feature3 = () => {
  return (
    <section className="section bg-[#FFFFFF] ">
      <div className=" mx-auto">
        <div className=" flex items-center justify-center gap-[68px]">
          <div className="">
            <div className=" flex items-end gap-[21px]">
              <img className="h-[334px] w-[250px]" src={Feature3img1} alt="" />
              <img className="h-[270px] w-[270px]" src={Feature3img2} alt="" />
            </div>
            <div className=" flex  gap-[21px] mt-[21px]">
              <img src={Feature3img3} alt="" className="h-[285px] w-[212px]" />
              <img src={Feature3img4} alt="" className="h-[356] w-[338px]" />
            </div>
          </div>
          <div className="w-[444px] h-[368px]">
            <h2 className="capitalize mb-[16px]  leading-[54px] font-primary font-extrabold text-[40px]">
              Flexibility and options to suit your lifestyle.
            </h2>
            <p className="mb-[40px]  font-primary font-normal text-[18px]">
              You need it? We got it. We make finding your next home easy,
              comfortable, and simple. From our happiness guarantee to our
              selective roommate finder option. We provide you the flexibility
              that you most desire.
            </p>
            <div className="h-[63px] w-[185px] bg-[#F4511E] rounded-[10px] flex items-center justify-center">
              <p className="text-white font-primary font-semibold text-[18px]">
                Search Rooms
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-[37px] mt-[110px]">
          <h2 className="capitalize font-primary font-medium text-[24px] text-center">
            Your property with us and be Confident that Your Room will be Filled
            Out!
          </h2>
          <div className="w-[1130px] h-[970px] bg-[#FFFFFF] ml-[155px] shadow-xl">
            <p className="font-secondary font-bold text-[28px] text-[#F4511E] text-center mt-[45px]">
              Add A New Property
            </p>
            <div className="flex justify-evenly mt-[66px] ">
              <div>
                <div className="flex gap-x-[8px]">
                  <p className="font-secondary font-semibold text-[17px]">
                    Name
                  </p>
                  <p className="text-[#F4511E]">*</p>
                </div>
                <form>
                  <input
                    className="h-[50px] rounded-[5px] w-[318px] p-[11px] name:pl-[11px] placeholder:text-[14px] placeholder:font-normal placeholder:font-primary border border-[#E6E6E6] placeholder:text-[#737373]  bg-[#F9F9F9]"
                    type="text"
                    placeholder="Enter Name"
                  />
                </form>
              </div>
              <div>
                <div className="flex gap-x-[8px]">
                  <p className="font-secondary font-semibold text-[17px]">
                    Address
                  </p>
                  <p className="text-[#F4511E]">*</p>
                </div>
                <form>
                  <input
                    className="h-[50px] rounded-[5px] p-[11px] w-[318px] placeholder:pl-[11px] placeholder:text-[14px] placeholder:font-normal placeholder:font-primary border border-[#E6E6E6] placeholder:text-[#737373] bg-[#F9F9F9]"
                    type="text"
                    placeholder="Enter Address"
                  />
                </form>
              </div>
              <div>
                <div className="flex gap-x-[8px]">
                  <p className="font-secondary font-semibold text-[17px]">
                    Unit Number
                  </p>
                  <p className="text-[#F4511E]">*</p>
                </div>
                <form>
                  <input
                    className="h-[50px] w-[318px] rounded-[5px] placeholder:pl-[11px] p-[11px] placeholder:text-[14px] placeholder:font-normal placeholder:font-primary border border-[#E6E6E6] placeholder:text-[#737373]  bg-[#F9F9F9]"
                    type="text"
                    placeholder="Enter Unit"
                  />
                </form>
              </div>
            </div>
            <div className="flex justify-evenly mt-[25px] ">
              <div>
                <div className="flex gap-x-[8px]">
                  <p className="font-secondary font-semibold text-[17px]">
                    City
                  </p>
                  <p className="text-[#F4511E]">*</p>
                </div>
                <div className="h-[50px] rounded-[5px] w-[318px] flex items-center border border-[#E6E6E6] bg-[#F9F9F9]">
                  <select className="pl-[11px] opacity-80 text-[14px] font-normal bg-transparent capitalize text-[#737373]  font-primary">
                    <option value="">
                      Select city &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex gap-x-[8px]">
                  <p className="font-secondary font-semibold text-[17px]">
                    State
                  </p>
                  <p className="text-[#F4511E]">*</p>
                </div>
                <div className="h-[50px] rounded-[5px] w-[318px] flex items-center border border-[#E6E6E6]  bg-[#F9F9F9]">
                  <select className="pl-[11px] opacity-80 text-[14px] font-normal bg-transparent capitalize text-[#737373]  font-primary">
                    <option value="">
                      Select State &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex gap-x-[8px]">
                  <p className="font-secondary font-semibold text-[17px]">
                    Room Type
                  </p>
                  <p className="text-[#F4511E]">*</p>
                </div>
                <div className="h-[50px] rounded-[5px] w-[318px] flex items-center border border-[#E6E6E6]  bg-[#F9F9F9]">
                  <select className="pl-[11px] opacity-80 text-[14px] font-normal bg-transparent capitalize text-[#737373]  font-primary">
                    <option value="">
                      Select room type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-[45px] ml-[45px] mt-[25px] ">
              <div>
                <div className="flex gap-x-[8px]">
                  <p className="font-secondary font-semibold text-[17px]">
                    Room Type
                  </p>
                  <p className="text-[#F4511E]">*</p>
                </div>
                <div className="h-[50px] rounded-[5px] w-[318px] flex items-center border border-[#E6E6E6] bg-[#F9F9F9]">
                  <select className="pl-[11px] opacity-80 text-[14px] font-normal bg-transparent capitalize text-[#737373]  font-primary">
                    <option value="">
                      Select room type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex gap-x-[8px]">
                  <p className="font-secondary font-semibold text-[17px]">
                    Name
                  </p>
                  <p className="text-[#F4511E]">*</p>
                </div>
                <form>
                  <input
                    className="h-[50px] rounded-[5px] w-[318px] placeholder:pl-[11px] placeholder:text-[14px] placeholder:font-normal placeholder:font-primary placeholder:text-[#737373] border border-[#E6E6E6]  bg-[#F9F9F9]"
                    type="text"
                    placeholder="Enter Name"
                  />
                </form>
              </div>
            </div>
            <div className="flex ml-[45px] mt-[25px] ">
              <div>
                <div className="flex gap-x-[8px]">
                  <p className="font-secondary font-semibold text-[17px]">
                    Description
                  </p>
                  <p className="text-[#F4511E]">*</p>
                </div>
                <form>
                  <textarea
                    className="h-[151px] w-[1004px] rounded-[5px] placeholder:pt-[13px] pt-[13px] placeholder:pl-[11px] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#737373] placeholder:font-primary resize-none pl-[11px] border border-[#E6E6E6] bg-[#F9F9F9]"
                    placeholder="Enter Description"
                  />
                </form>
              </div>
            </div>
            <div className="flex ml-[45px] mt-[25px] ">
              <div>
                <div className="flex gap-x-[8px]">
                  <p className="font-secondary font-semibold text-[17px]">
                    Upload Photos
                  </p>
                </div>
                <div className="flex relative flex-col items-center justify-center h-[102px] w-[1004px] rounded-[10px]  border-dashed border border-[#F4511E]  bg-[#F9F9F9]">
                  <input
                    className="absolute inset-0 cursor-pointer opacity-0"
                    type="file"
                  />
                  <div className="flex">
                    <h2 className="font-secondary font-semibold text-[16px]">
                      Drag your images here, or &nbsp;
                    </h2>
                    <h3 className="text-[#F4511E] font-secondary font-semibold text-[16px]">
                      browse
                    </h3>
                  </div>
                  <p className="font-secondary font-medium mt-[6px] text-[#00000080] text-[12px]">
                    Supported: JPG, JPEG, PNG
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[55px]">
              <div className="h-[69.01px] flex items-center rounded-[10px] w-[513px] justify-center text-[21.79px] font-medium text-white font-primary bg-[#F4511E]">
                Add New Property
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
