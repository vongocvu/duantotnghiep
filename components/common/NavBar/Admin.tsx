import { Box } from "@mui/material";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import Image from "next/image";
import NavItem from "./NavItem";
import { NavAdmin } from "@/datas/NavBar";
import { useState } from "react";

const Admin = () => {
  const [curentTab, setCurentIstab] = useState("");

  const HandleTab = (tab: string) => {
    setCurentIstab(tab);
  };

  return (
    <Box
      sx={{
        width: "280px",
        height: "100%",
        background: "linear-gradient(-45deg, #0da487, #009289, #ffa53b)",
        backgroundSize: "400% 400%",
        padding: "0 20px",
        animation: "myEffect 15s ease infinite",
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
          <Image
            width="150"
            height="100"
            src="https://themes.pixelstrap.com/fastkart/back-end/assets/images/logo/full-white.png"
            alt="logo"
          />
        </Box>
        <BlurOnIcon
          sx={{
            color: "white",
            fontSize: "40px",
          }}
        />
      </Box>
      <Box>
        {NavAdmin.map((data, index) => (
          <Box key={index} onClick={() => HandleTab(data.title)}>
            {data.dropdown ? (
              <NavItem
                icon={data.icon}
                title={data.title}
                dropdown={true}
                data_drops={data.drop_datas}
                isTab={curentTab}
              />
            ) : (
              <NavItem
                icon={data.icon}
                title={data.title}
                path={data.path}
                isTab={curentTab}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Admin;
