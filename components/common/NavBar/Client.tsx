import { Box } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Image from "next/image";

export interface CategoryListInput {
  datas: any[];
}

interface NavItemInput {
  icon?: string;
  title: string;
}

const NavItem = ({ icon, title }: NavItemInput) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: "10px",
          marginRight: "10px",
        }}
      >
        <Image width="30" height="30" src={icon || ""} alt="icon" />
      </Box>
      <Box>{title}</Box>
    </Box>
  );
};

const Client = ({ datas }: CategoryListInput) => {
  return (
    <Box>
      {datas &&
        datas.map((data) => (
          <Link key={data.id} href={data.path}>
            <NavItem icon={data?.icon} title={data?.title} />
          </Link>
        ))}
    </Box>
  );
};

export default Client;
