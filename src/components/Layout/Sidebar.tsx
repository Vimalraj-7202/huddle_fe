import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Box,
  Tooltip,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import AppLogo from "@/components/common/AppLogo";

import DashboardIcon from "@mui/icons-material/SpaceDashboardRounded";
import ChatIcon from "@mui/icons-material/ChatRounded";
import SettingsIcon from "@mui/icons-material/SettingsSuggestRounded";
import LogoutIcon from "@mui/icons-material/LogoutRounded";

const drawerWidth = 66;
const size = 26;

const navButtonSx = {
  borderRadius: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mb: 0.25,
  mx: "auto",
  width: 52,
  height: 52,
  position: "relative",

  "& .MuiListItemIcon-root": {
    minWidth: 0,
    justifyContent: "center",
    color: "#707070",
  },

  "&.active": {
    "& .MuiListItemIcon-root": {
      color: "#3642bb",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      left: -8,
      top: 12,
      bottom: 12,
      width: "4px",
      borderRadius: "0 6px 6px 0",
      backgroundColor: "#3642bb",
    },
  },

  "&:hover": {
    backgroundColor: "rgba(54, 66, 187, 0.08)",
  },
};

const Sidebar = () => {
  const navigate = useNavigate();

  const links = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: <DashboardIcon sx={{ fontSize: size }} />,
    },
    {
      path: "/chat",
      label: "Chat",
      icon: <ChatIcon sx={{ fontSize: size }} />,
    },
    {
      path: "/settings",
      label: "Settings",
      icon: <SettingsIcon sx={{ fontSize: size }} />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login", { replace: true });
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        height: "100%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          height: "100%",
          position: "relative",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "none",
          bgcolor: "transparent",
        },
      }}
    >
      <Box>
        <Box
          component="header"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 1.25,
          }}
        >
          <Tooltip title="Huddle" placement="right" arrow>
            <Box sx={{ display: "flex" }}>
              <AppLogo size={40} iconOnly />
            </Box>
          </Tooltip>
        </Box>

        <List sx={{ pt: 0, px: 0.25 }}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={{ textDecoration: "none" }}
            >
              {({ isActive }) => (
                <Tooltip title={link.label} placement="right" arrow>
                  <ListItemButton
                    className={isActive ? "active" : ""}
                    sx={navButtonSx}
                  >
                    <ListItemIcon>{link.icon}</ListItemIcon>
                  </ListItemButton>
                </Tooltip>
              )}
            </NavLink>
          ))}
        </List>
      </Box>

      <Box sx={{ pb: 1, display: "flex", justifyContent: "center" }}>
        <Tooltip title="Logout" placement="right" arrow>
          <ListItemButton onClick={handleLogout} sx={navButtonSx}>
            <ListItemIcon>
              <LogoutIcon sx={{ fontSize: size, color: "#707070" }} />
            </ListItemIcon>
          </ListItemButton>
        </Tooltip>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
