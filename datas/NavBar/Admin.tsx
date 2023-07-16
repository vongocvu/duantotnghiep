import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import FormatListNumberedRtlOutlinedIcon from "@mui/icons-material/FormatListNumberedRtlOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

export const NavAdmin = [
  {
    icon: <HomeOutlinedIcon />,
    title: "Dashboard",
    path: "dashboard",
    dropdown: false,
  },
  {
    icon: <Inventory2OutlinedIcon />,
    title: "Product",
    dropdown: true,
    drop_datas: [
      {
        title: "Products",
        path: "All_product",
      },
      {
        title: "Add New Products",
        path: "Add_product",
      },
    ],
  },
  {
    icon: <CategoryOutlinedIcon />,
    title: "Category",
    dropdown: true,
    drop_datas: [
      {
        title: "Category List",
        path: "All_category",
      },
      {
        title: "Add New Category",
        path: "Add_category",
      },
    ],
  },
  {
    icon: <FormatListNumberedRtlOutlinedIcon />,
    title: "Attributes",
    dropdown: true,
    drop_datas: [
      {
        title: "Attributes",
        path: "Attributes",
      },
      {
        title: "Add Attributes",
        path: "Add_attributes",
      },
    ],
  },
  {
    icon: <PermIdentityOutlinedIcon />,
    title: "Users",
    dropdown: true,
    drop_datas: [
      {
        title: "All users",
        path: "All_users",
      },
      {
        title: "Add new user",
        path: "Add_user",
      },
    ],
  },
  {
    icon: <PermIdentityOutlinedIcon />,
    title: "Roles",
    dropdown: true,
    drop_datas: [
      {
        title: "All roles",
        path: "All_roles",
      },
      {
        title: "Create Role",
        path: "Create_role",
      },
    ],
  },
  {
    icon: <MovieOutlinedIcon />,
    title: "Media",
    path: "Media",
    dropdown: false,
  },
  {
    icon: <ShoppingCartOutlinedIcon />,
    title: "Oders",
    dropdown: true,
    drop_datas: [
      {
        title: "Oder List",
        path: "All_oder",
      },
      {
        title: "Oder Detail",
        path: "Oder_detail",
      },
      {
        title: "Oder Tracking",
        path: "Oders_tracking",
      },
    ],
  },
  {
    icon: <AssessmentOutlinedIcon />,
    title: "Report",
    path: "Report",
    dropdown: false,
  },
  {
    icon: <AutoStoriesOutlinedIcon />,
    title: "List Page",
    path: "List_page",
    dropdown: false,
  },
];
