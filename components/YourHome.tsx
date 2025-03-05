import Image from "next/image";
import React from "react";
import image from "@assets/image";
const YourHome = () => {
  return (
    <div className="mr-6 ml-6 mt-4">
      <h1>Your Homes</h1>
      <div className="flex gap-2 mt-4">
        <div className=" bg-white  border-2 pt-3 pl-2 pr-2 pb-3 rounded-xl">
          <Image src={image.room1} alt="" width={149} height={180} />
          <h1>702 Cortland</h1>
          <p className="font-normal w-149px text-[8px]">
            4030 N MacArthur Blvd #112, Irving, TX 75038
          </p>
        </div>
        <div className="  bg-white border-2 pt-3 pl-2 pr-2 pb-3 rounded-xl">
          <Image src={image.room1} alt="" width={149} height={180} />
          <h1>702 Cortland</h1>
          <p className="font-normal w-149px text-[8px]">
            4030 N MacArthur Blvd #112, Irving, TX 75038
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourHome;
