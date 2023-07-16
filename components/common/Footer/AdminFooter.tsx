import { Box } from "@mui/material";

function AdminFooter() {
  return (
    <Box
      sx={{
        width: "calc(100% - 280px)",
        textAlign: "center",
        color: "#4a5568",
        fontSize: "13px",
        backgroundColor: "#fff",
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      }}
      className="fixed bottom-0 right-0"
    >
      <p className="p-4">Copyright 2022 © Fastkart theme by pixelstrap</p>
    </Box>
  );
}

export default AdminFooter;
