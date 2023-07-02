import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Image from "next/image";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Line from "@/components/helpers/Line";

export interface InputCard {
  image: string;
  name: string;
  price: number;
  id: string;
  className?: string;
}

const CardStyle = styled.div`
  border: 1px solid #ccc;
  border-left: 1px solid transparent;
  border-top: 1px solid transparent;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Card = ({ image, name, price, id, className }: InputCard) => {
  return (
    <CardStyle className={`${className} cardProduct`}>
      <Box sx={{
        flex: "1",
        position: "relative",
      }} className="p-2  flex justify-center items-center">
        <Image
          width="100"
          height="100"
          className="w-full object-contain imageProduct"
          src={image}
          alt={name}
        />
        <Box sx={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          display: 'flex',
          alignItems: "center",
          backgroundColor: "white",
          padding:"0 15px",
          borderRadius: "10px",
          boxShadow: "0 -10px 10px rgba(34,34,34,.1)",
        }}
         className="detailCard">
           <RemoveRedEyeOutlinedIcon />
           <Line />
           <ChangeCircleOutlinedIcon />
           <Line />
           <FavoriteBorderOutlinedIcon />
        </Box>
      </Box>
      <Box
        sx={{
          padding: "10px 0",
        }}
        className="text-center"
      >
        <Box className="font-medium text-md">{name}</Box>
        <Box className="text-[#0da487] font-bold">$ {price}</Box>
        <Box sx={{
          padding: "8px 0",
          margin: "0 20px",
          marginTop: "10px",
          borderRadius: "50px",
          cursor: "pointer",
          border: "1px solid #ccc",
          backgroundColor: "#f8f8f8",
          opacity: "0.7",
          fontSize: "14px",
          position: "relative",
        }}>
           Add
           <Box sx={{
            position: "absolute",
            height: "100%",
            width: "36px",
            border: "1px solid #ccc",
            borderRadius: "50%",
            backgroundColor: "white",
            fontWeight: "bold",
            color: "#0da487",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: "0",
            right: "0"
           }}>+</Box>
        </Box>
      </Box>
    </CardStyle>
  );
};

export default Card;
