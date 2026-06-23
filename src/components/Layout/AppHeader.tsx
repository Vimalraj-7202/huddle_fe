import { Box, Typography, Avatar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { panelSx } from "@/components/Layout/layoutStyles";
import avatarImg from "@/assets/hero.png";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/chat": "Chat",
  "/settings": "Settings",
};

const AppHeader = () => {
  const { pathname } = useLocation();
  const title = pageTitles[pathname] ?? "Dashboard";

  return (
    <Box
      component="header"
      sx={{
        ...panelSx,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2.5,
        py: 0.75,
        flexShrink: 0,
        minHeight: 52,
      }}
    >
      <Typography sx={{ fontSize: 20, fontWeight: 700, color: "#1f2937" }}>
        {title}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
        <Avatar
          src={avatarImg}
          alt="Vimalraj"
          sx={{ width: 32, height: 32 }}
        />
        <Box>
          <Typography sx={{ fontSize: 14, fontWeight: 600, color: "#1f2937", lineHeight: 1.2 }}>
            Vimalraj
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#6b7280", lineHeight: 1.2 }}>
            Trainee - Developer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AppHeader;
