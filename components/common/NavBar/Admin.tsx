import { Box } from "@mui/material";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import Image from "next/image";
import NavItem from "./NavItem";
import { NavAdmin } from "@/datas/NavBar";
import Link from "next/link";

const Admin = () => {
  return (
    <Box
      sx={{
        width: "280px",
        height: "100vh",
        background: "linear-gradient(-45deg, #0da487, #009289, #ffa53b)",
        backgroundSize: "400% 400%",
        padding: "0 15px",
        paddingBottom: "10px",
        display: "flex",
        flexDirection: "column",
        animation: "myEffect 15s ease infinite",
        position: "fixed",
        top: 0,
        left: 0,
        "@keyframes myEffect": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            padding: "30px 10px",
          }}
        >
          <Link href={`/admin`}>
            <Image
              width="150"
              height="100"
              src="https://themes.pixelstrap.com/fastkart/back-end/assets/images/logo/full-white.png"
              alt="logo"
            />
          </Link>
        </Box>
        <BlurOnIcon
          sx={{
            color: "white",
            fontSize: "40px",
          }}
        />
      </Box>

      <Box
        sx={{
          flex: "1",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "1px",
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent",
          },
          scrollBehavior: "smooth",
        }}
      >
        {NavAdmin.map((data, index) => (
          <Box key={index}>
            {data.dropdown ? (
              <NavItem
                icon={data.icon}
                title={data.title}
                dropdown={true}
                data_drops={data.drop_datas}
              />
            ) : (
              <NavItem icon={data.icon} title={data.title} path={data.path} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Admin;
