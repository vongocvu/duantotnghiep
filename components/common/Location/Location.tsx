import { Box, Typography } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Breakpoints } from "@/helpers/Breakpoints";

const Location = () => {
  const { Mobile_, Tablet_, Laptop_, Desktop_, LargeDesktop_, MoreScreen_ } =
    Breakpoints();

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        height: "50px",
        borderRadius: "5px",
        marginRight: "10px",
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box
        sx={{
          padding: "5px",
          backgroundColor: "#f3f5f9",
          borderRadius: "5px",
        }}
      >
        <PlaceOutlinedIcon
          sx={{
            fontSize: "22px",
            color: "#4a5568",
          }}
        />
      </Box>
      {!Desktop_ && 
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#0da487",
              fontSize: "17px",
              margin: " 0 10px",
            }}
          >
            Your location
            <KeyboardArrowDownOutlinedIcon />
          </Typography>
        }
    </Box>
  );
};

export default Location;
