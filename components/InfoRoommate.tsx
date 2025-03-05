import Image from "next/image";
import React from "react";
interface InfoRoommateProps {
  avatar: string;
  name: string;
  gender: string;
}

const InfoRoommate = ({ avatar, name, gender }: InfoRoommateProps) => {
  return (
    <div className="md:iphone-13:">
      <Image src={avatar} alt="" />
      <div className="flex gap-1">
        {" "}
        <h1 className="w-[86.65] h-[18] truncate">{name}</h1>
        <Image src={gender} alt="" />
      </div>
    </div>
  );
};

export default InfoRoommate;
