import { Container, Box } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { Breakpoints } from "@/helpers/Breakpoints";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Line from "@/components/helpers/Line";

const TopHeader = () => {
  const { Mobile_, Tablet_, Laptop_, Desktop_ } = Breakpoints();

  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px 0",
        backgroundColor: "#0da487",
        fontWeight: "medium",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="desktop">
        <Box
          sx={{
            display: "flex",
            justifyContent: `${!Mobile_ ? "end" : "space-between"}`,
            color: "primary.main",
            fontWeight: "500",
            fontSize: "15px",
          }}
        >
          {Laptop_ && (
            <Box>
              {" "}
              <PlaceOutlinedIcon
                sx={{
                  fontSize: "22px",
                }}
              />{" "}
              Nguyễn Thị Thập
            </Box>
          )}
          {Mobile_ && (
            <Box>Xin chào bạn đã đến với cửa hàng của chúng tôi !!</Box>
          )}
          <Box className="flex">
            <Box className="cursor-pointer hover:underline">
              English <KeyboardArrowDownOutlinedIcon />
            </Box>
            <Line />{" "}
            <Box className="cursor-pointer hover:underline">
              USD <KeyboardArrowDownOutlinedIcon />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopHeader;
