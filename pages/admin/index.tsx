import AdminFooter from "@/components/common/Footer/AdminFooter";
import AdminHeader from "@/components/common/Header/AdminHeader";
import { NavAdmin } from "@/components/common/NavBar";
import { Breakpoints } from "@/helpers/Breakpoints";
import Box from "@mui/material/Box";
import { GetStaticProps } from "next";

const Dashboard = (props: any) => {
  const { Tablet_ } = Breakpoints();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      {!Tablet_ && <NavAdmin />}
      <Box
        sx={{
          width: "calc(100% -263px)",
          height: "100vh",
          marginTop: "92px",
          backgroundColor: "#f9f9f6",
        }}
      >
        <AdminHeader notifications={props}></AdminHeader>
        <AdminFooter></AdminFooter>
      </Box>
      <Box></Box>
    </Box>
  );
};
export const getStaticProps: GetStaticProps = () => {
  const notifications = ["hello", "hi"];

  return {
    props: {
      notifications,
    },
  };
};
export default Dashboard;
