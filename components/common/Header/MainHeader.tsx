import { Box, Container, Typography } from "@mui/material";
import { Search } from "../Search";
import { Location } from "../Location";
import { Breakpoints } from "@/helpers/Breakpoints";
import Line from "@/components/helpers/Line";
import { AccountIcon, CartIcon, HeartIcon, ListIcon, PhoneIcon } from "@/datas/icons";
import { Logo } from "../Logo";

const MainHeader = () => {
  const { Mobile_, Tablet_, Laptop_, Desktop_, LargeDesktop_, MoreScreen_ } = Breakpoints();

  return (
    <Box
      sx={{
        position: "sticky",
        boxShadow: "0 3px 10px rgba(34,34,34,0.05)",
        top: "0",
        left: "0",
        right: "0",
        backgroundColor: "white",
        zIndex: "10",
      }}
    >
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: `${Mobile_ ? "8px 0" : "15px 0"}`,
          }}
        >
          {(Mobile_ || Tablet_) && (
            <Box
              sx={{
                marginRight: "10px",
              }}
            >
              <ListIcon />
            </Box>
          )}

          <Logo />
          {!Mobile_ && (
            <Box
              sx={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: `${!Desktop_ ? "center" : "space-between"}`,
                margin: `${!Laptop_ && "0 10px"}`,
              }}
            >
              <Location />
              <Box sx={{ width: "600px" }}>
                <Search />
              </Box>
            </Box>
          )}

          {(!Mobile_ || !Tablet_) && (
            <Box className="flex h-[50px]">
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {!Mobile_ && <Line />}
                  <PhoneIcon />
                </Box>
                {MoreScreen_ && (
                  <Box className="ml-[15px]">
                    <span>24/7 Delivery</span>
                    <Typography
                      sx={{
                        fontWeight: "550",
                      }}
                    >
                      +84 376 360 127
                    </Typography>
                  </Box>
                )}
              </Box>
              <Line />
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HeartIcon />
              </Box>
              <Line />
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CartIcon />
              </Box>
              <Line />
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccountIcon />
                </Box>
                {MoreScreen_ && (
                  <Box className="ml-[15px]">
                    <span>Hello,</span>
                    <Typography
                      sx={{
                        fontWeight: "550",
                      }}
                    >
                      My Account
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          )}

          {Mobile_ && <AccountIcon />}
        </Box>
      </Container>
    </Box>
  );
};

export default MainHeader;
