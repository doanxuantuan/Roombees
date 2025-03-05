import image from "@assets/image";
import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className=" ml-6 mr-6">
      <div className=" mt-2 rounded-lg p-1 flex items-center justify-start gap-2 border-[#FFEAAC] border">
        <Image src={image.avatar} alt="" width={40} height={40} />
        <h1 className="font-unicorn">Jhon snow</h1>
        <Image src={image.male} alt="" width={16} height={16} />
      </div>
      <Image
        className="mt-2"
        src={image.banner}
        width={350}
        height={120}
        alt=""
      />
    </div>
  );
};

export default Profile;
