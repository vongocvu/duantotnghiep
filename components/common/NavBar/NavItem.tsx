import { Box } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

export interface NavItemInput {
  icon?: ReactNode;
  title: string;
  data_drops?: any[];
  dropdown?: boolean;
  path?: string;
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
          padding: "12px 10px",
        }}
      >
        {icon}
      </Box>
      <Box
        sx={{
          fontSize: "15px",
          flex: "1",
          letterSpacing: "0.5px",
        }}
      >
        {title}
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, title, data_drops, dropdown, path }: NavItemInput) => {
  const [dropIcon, setDropIcon] = useState(<ChevronRightOutlinedIcon />);
  const [isDropdown, setIsDropdown] = useState(false);

  const DropRef = useRef<HTMLDivElement>(null);

  const HandleDroper = () => {
    setIsDropdown(!isDropdown);
  };

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
            marginBottom: "5px",
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
            marginBottom: "5px",
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
          height: `${isDropdown ? "auto" : "0px"}`,
          overflow: "hidden",
          color: "white",
          fontWeight: "500",
        }}
      >
        {data_drops &&
          data_drops.map((data, index) => (
            <Link href={`/admin/${data.path}`} key={index}>
              <Box
                sx={{
                  height: "48.8px",
                  padding: "0 15px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "10px",
                    height: "100%",
                    marginRight: "18px",
                    position: "relative",
                    "&::after": {
                      content: "' '",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "6px",
                      borderTop: "2px solid #fff",
                    },
                  }}
                ></Box>
                <Box
                  sx={{
                    fontSize: "15px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {data.title}
                </Box>
              </Box>
            </Link>
          ))}
      </Box>
    </Box>
  );
};

export default NavItem;
export { NavContent };
