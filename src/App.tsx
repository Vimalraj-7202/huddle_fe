import { Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import routes from "@/routes/route";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Spinner } from "@/common/suspense";
import DiscordBackground from "@/components/auth/DiscordBackground";
import "@/App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5865f2",
    },
  },
});

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname.startsWith("/auth/login");
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          bgcolor: isLoginPage ? "#050634" : "#eef0f5",
        }}
      >
        {isLoginPage && <DiscordBackground />}
        <Box sx={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
          <Suspense fallback={<Spinner />}>{routing}</Suspense>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
