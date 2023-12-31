import { Box } from "@mui/material";
import Image from "next/image";

export interface InputBanner {
  image: string;
  percent?: string;
  maintext?: string;
  subtext?: string;
  link?: string;
}

const SellerBanner = ({ image, ...text }: InputBanner) => {
  return (
    <Box className="relative rounded-[5px] overflow-hidden cursor-pointer">
      <Box className="absolute  md:w-[80%] md:h-[45%] w-[65%] h-[40%] bg-white left-0 top-[15%] rounded-tr-[50px] rounded-br-[50px] p-[10px] z-[10]">
        <p className="text-red-500"> {text?.percent}</p>
        <p className="font-bold text-lg"> {text?.maintext}</p>
        <p className="text-sm">{text?.subtext}</p>
      </Box>
      <Image
        width={"100"}
        height={"100"}
        style={{
          transition: "all .5s ease-out",
        }}
        className="w-full h-full object-contain hover:scale-[1.2] hover:rotate-[5deg] hover:opacity-[0.7]"
        src={image}
        alt={image}
      />
    </Box>
  );
};

export default SellerBanner;
