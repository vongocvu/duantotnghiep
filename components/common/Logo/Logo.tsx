import Box from "@mui/material/Box";
import Link from "next/link";

const Logo = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Link href={"/"}>
        <Box
          sx={{
            fontSize: "40px",
            fontWeight: "500",
            color: "#0da487",
            display: "flex",
          }}
        >
          Fast
          <Box
            sx={{
              fontSize: "40px",
              fontWeight: "500",
              color: "black",
            }}
          >
            kart
          </Box>
          .
        </Box>
      </Link>
    </Box>
  );
};

export default Logo;
