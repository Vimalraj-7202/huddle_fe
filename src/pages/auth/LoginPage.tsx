import { useState, type KeyboardEvent } from "react";
import {
  Button,
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAppDispatch } from "@/store/store";
import { login } from "@/store/auth/auth.thunk";
import { Spinner } from "@/common/suspense";

const loginHeroImage =
  "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6841ca4c5468891aedebb224_homepage-hero-mobile-858x803.webp";

const loginHeroSrcSet = `
  https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6841ca4c5468891aedebb224_homepage-hero-mobile-858x803-p-500.webp 500w,
  https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6841ca4c5468891aedebb224_homepage-hero-mobile-858x803-p-800.webp 800w,
  https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6841ca4c5468891aedebb224_homepage-hero-mobile-858x803.webp 858w
`;

const inputSx = {
  borderRadius: "6px",
  color: "#ffffff",
  bgcolor: "rgba(255, 255, 255, 0.08)",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.45)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.7)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffffff",
  },
  "& input": {
    color: "#ffffff",
  },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px #050634 inset",
    WebkitTextFillColor: "#ffffff",
    transition: "background-color 5000s ease-in-out 0s",
  },
};

const labelSlotProps = {
  shrink: true,
  sx: {
    color: "rgba(255, 255, 255, 0.85)",
    "&.Mui-focused": { color: "#ffffff" },
  },
};

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await dispatch(login({ email, password })).unwrap();
      navigate("/dashboard", { replace: true });
    } catch (err: unknown) {
      setError(
        typeof err === "string"
          ? err
          : err instanceof Error
            ? err.message
            : "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 6,
        }}
      >
        {loading ? (
          <Spinner />
        ) : (
          <Box sx={{ width: "100%", maxWidth: 360, p: 2 }}>
            <Typography
              variant="h5"
              align="center"
              sx={{ color: "#ffffff", fontWeight: "bold" }}
            >
              huddle
            </Typography>

            <Typography
              align="center"
              sx={{
                color: "rgba(255, 255, 255, 0.85)",
                fontSize: "0.75rem",
                mb: 3,
                letterSpacing: 0.3,
                lineHeight: 1.4,
              }}
            >
              Where dev teams chat, share code, and ship.
            </Typography>

            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              variant="outlined"
              slotProps={{
                input: { sx: inputSx },
                inputLabel: labelSlotProps,
              }}
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              variant="outlined"
              slotProps={{
                input: {
                  sx: inputSx,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{ color: "#ffffff" }}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
                inputLabel: labelSlotProps,
              }}
            />

            {error && (
              <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}

            <Button
              fullWidth
              onClick={handleLogin}
              disabled={loading}
              sx={{
                mt: 2,
                backgroundColor: "#ffffff",
                color: "#050634",
                borderRadius: 2,
                textTransform: "none",
                height: 40,
                fontWeight: 600,
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
                "&:disabled": {
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  color: "#050634",
                },
              }}
            >
              {loading ? (
                <CircularProgress size={22} sx={{ color: "#050634" }} />
              ) : (
                "Sign In"
              )}
            </Button>
          </Box>
        )}
      </Box>

      <Box
        component="img"
        src={loginHeroImage}
        srcSet={loginHeroSrcSet.trim()}
        sizes="(max-width: 858px) 100vw, 858px"
        alt="Team chat for code, repos, and collaboration"
        sx={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: { xs: "none", md: "block" },
        }}
      />
    </Box>
  );
};

export default LoginPage;
