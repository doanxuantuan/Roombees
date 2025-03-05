import React from "react";
import Image from "next/image";

interface CustomButtonProps {
  icon: string;
  title: string;
  styles: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Không cần `null` hay `void`
}

const CustomButton = ({ icon, title, styles, onClick }: CustomButtonProps) => {
  return (
    <button className={`${styles}`} onClick={onClick}>
      <div className="ml-2">
        <Image src={icon} width={32} height={32} alt="" />
        <h1>{title}</h1>
      </div>
    </button>
  );
};

const CustomButtonBottom = ({
  icon,
  title,
  styles,
  onClick,
}: CustomButtonProps) => {
  return (
    <button className={`${styles} mt-2`} onClick={onClick || undefined}>
      <div className="w-[340px] p-2 gap-2 font-bold flex items-center cursor-pointer border rounded-lg">
        <Image src={icon} width={24} height={24} alt="" />
        <h1 className="ml-2">{title}</h1>
      </div>
    </button>
  );
};

export { CustomButton, CustomButtonBottom };
