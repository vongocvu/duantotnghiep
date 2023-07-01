import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Image from "next/image";

export interface InputCard {
  image: string;
  name: string;
  price: number;
  id: string;
  className: string;
}

const CardStyle = styled.div`
  border: 1px solid #ccc;
  border-left: 1px solid transparent;
  border-top: 1px solid transparent;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Card = ({ image, name, price, id, className }: InputCard) => {
  return (
    <CardStyle className={className}>
      <Box className="p-10 min-h-[70%]">
        <Image
          width="100"
          height="100"
          className="w-full object-contain"
          src={image}
          alt={name}
        />
      </Box>
      <Box
        sx={{
          padding: "10px 0",
        }}
        className="text-center"
      >
        <Box className="font-medium text-md">{name}</Box>
        <Box className="text-[#0da487] font-bold">$ {price}</Box>
      </Box>
    </CardStyle>
  );
};

export default Card;
