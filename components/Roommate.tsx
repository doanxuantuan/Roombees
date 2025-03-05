// import Image from "next/image";
import React from "react";
import InfoRoommate from "./InfoRoommate";
import info from "@assets/info";
const Roommate = () => {
  return (
    <div className="ml-6 mr-6 mt-4 grid grid-cols-3">
      {info.map((value) => {
        return (
          <div className="mt-2" key={value.id}>
            <InfoRoommate
              avatar={value.avatar}
              name={value.name}
              gender={value.gender}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Roommate;
