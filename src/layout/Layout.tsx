import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Layout/Sidebar";
import { Box } from "@mui/material";

const panelSx = {
  bgcolor: "#fff",
  borderRadius: 2,
  border: "1px solid #eceef3",
  boxShadow: "0 2px 12px rgba(6, 7, 54, 0.06)",
  overflow: "hidden",
};

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        p: 1,
        gap: 1,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          ...panelSx,
          flexShrink: 0,
          height: "100%",
        }}
      >
        <Sidebar />
      </Box>

      <Box
        sx={{
          ...panelSx,
          flexGrow: 1,
          flexShrink: 1,
          minWidth: 0,
          height: "100%",
          overflowY: "auto",
          p: 1.25,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
