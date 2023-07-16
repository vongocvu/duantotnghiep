import { Box } from "@mui/material";
import { Search } from "../Search";
import { Moon, Notifications } from "@/datas/icons";
import DropMenu from "../Dropmenu/Dropmenu";
import Avatar from "@mui/material/Avatar";
import { Breakpoints } from "@/helpers/Breakpoints";
import { Logo } from "../Logo";
function AdminHeader(props: any) {
  const { Tablet_ } = Breakpoints();
  return (
    <Box
      sx={{
        width: "calc(100% - 280px)",
        zIndex: 100,
        backgroundColor: "#fff",
        padding: "22px 30px",
      }}
      className="fixed top-0 right-0 flex justify-between"
    >
      {Tablet_ && <Logo></Logo>}
      <Box sx={{ width: "450px" }}>
        <Search />
      </Box>
      <Box sx={{ display: "flex", gap: "1em", alignItems: "center" }}>
        <DropMenu
          Icon={<Notifications></Notifications>}
          ItemMenu={props.notifications.notifications}
        ></DropMenu>
        <Moon></Moon>
        <Box>
          <DropMenu
            Icon={
              <Box>
                <Avatar></Avatar>
              </Box>
            }
            ItemMenu={["users", "Orders"]}
          ></DropMenu>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminHeader;
