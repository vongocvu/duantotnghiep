import Box from "@mui/material/Box";

const Line = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "30px",
        position: "relative",
        "&::after": {
          content: "''",
          position: "absolute",
          height: "60%",
          margin: "0 15px",
          top: "50%",
          transform: "translateY(-50%)",
          borderLeft: "1px solid #ccc",
        },
      }}
    ></Box>
  );
};

export default Line;
