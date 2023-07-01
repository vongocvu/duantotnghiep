import { Box, Typography } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

export interface NavItemInput {
  icon: ReactNode;
  title: string;
  data_drops?: any[];
  dropdown?: boolean;
  path?: string;
  isTab?: string;
}

const NavItemStyled = styled.div`
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.1s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

const NavContent = ({ icon, title }: NavItemInput) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <Box
        sx={{
          padding: "10px",
        }}
      >
        {icon}
      </Box>
      <Box
        sx={{
          fontSize: "14px",
          fontWeight: "550",
          flex: "1",
          letterSpacing: "0.7px",
        }}
      >
        {title}
      </Box>
    </Box>
  );
};

const NavItem = ({
  icon,
  title,
  data_drops,
  dropdown,
  path,
  isTab,
}: NavItemInput) => {
  const [dropIcon, setDropIcon] = useState(<ChevronRightOutlinedIcon />);
  const [isDropdown, setIsDropdown] = useState(false);

  const DropRef = useRef<HTMLDivElement>(null);

  const HandleDroper = () => {
    setIsDropdown(!isDropdown);
    console.log(DropRef.current?.offsetHeight);
  };

  useEffect(() => {
    isTab !== title && setIsDropdown(false);
  }, [isTab, title]);

  useEffect(() => {
    isDropdown
      ? setDropIcon(<KeyboardArrowDownOutlinedIcon />)
      : setDropIcon(<ChevronRightOutlinedIcon />);
  }, [isDropdown]);

  if (!dropdown)
    return (
      <NavItemStyled>
        <Box
          sx={{
            marginBottom: "10px",
          }}
        >
          <Link href={`/admin/${path}`}>
            <NavContent icon={icon} title={title} />
          </Link>
        </Box>
      </NavItemStyled>
    );

  return (
    <Box>
      <NavItemStyled>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: `${isDropdown && "rgba(255, 255, 255, 0.06)"}`,
          }}
          onClick={HandleDroper}
        >
          <NavContent icon={icon} title={title} />
          <Box
            sx={{
              margin: "0 15px",
              color: "white",
            }}
          >
            {dropIcon}
          </Box>
        </Box>
      </NavItemStyled>

      <Box
        ref={DropRef}
        sx={{
          width: "100%",
          height: `${isDropdown ? "100px" : "0px"}`,
          transition: "all .5s ease-out",
          overflow: "hidden",
          color: "white",
          paddingTop: "10px",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        {data_drops &&
          data_drops.map((data, index) => (
            <Link href={`/admin/${data.path}`} key={index}>
              <Box
                sx={{
                  padding: "5px 15px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    margin: "0 15px",
                  }}
                >
                  -
                </Typography>
                <Typography
                  sx={{
                    letterSpacing: "0.3px",
                  }}
                >
                  {data.title}
                </Typography>
              </Box>
            </Link>
          ))}
      </Box>
    </Box>
  );
};

export default NavItem;
