import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import AppHeader from "@/components/Layout/AppHeader";
import { panelSx } from "@/components/Layout/layoutStyles";

const MainContent = () => {
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        minWidth: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
      }}
    >
      <AppHeader />

      <Box
        sx={{
          ...panelSx,
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          p: 2,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainContent;
