import { Box } from "@mui/material";

const LOGO_SRC = "/logo.svg";
const LOGO_ICON_SRC = "/logo-icon.svg";

type AppLogoProps = {
  size?: number;
  iconOnly?: boolean;
};

const AppLogo = ({ size = 40, iconOnly = false }: AppLogoProps) => (
  <Box
    component="img"
    src={iconOnly ? LOGO_ICON_SRC : LOGO_SRC}
    alt="Huddle logo"
    sx={{ width: size, height: size, objectFit: "contain", display: "block", flexShrink: 0 }}
  />
);

export default AppLogo;
