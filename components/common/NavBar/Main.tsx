import { Box } from "@mui/material";
import { Button_ } from "../Banner/Button";

const Main = () => {
  return (
    <Box className="flex items-center">
      <Button_ text="Home" />
      <Button_ text="Shop" />
      <Button_ text="Product" />
      <Button_ text="Mega Menu" />
      <Button_ text="Blog" />
      <Button_ text="Pages" />
      <Button_ text="Seller" />
    </Box>
  );
};

export default Main;
