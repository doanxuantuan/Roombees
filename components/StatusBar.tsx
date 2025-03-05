import Image from "next/image";
import React from "react";
import image from "@assets/image";
const StatusBar = () => {
  return (
    <div>
      <Image src={image.statusBar} width={390} height={47} alt="" />
    </div>
  );
};

export default StatusBar;
