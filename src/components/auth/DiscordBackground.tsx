import { Box } from "@mui/material";
import TwinklingStars from "@/components/auth/TwinklingStars";

/** Discord brand palette (from reference) */
export const discordColors = {
  ink: "#050634",
  navy: "#0a0a4a",
  indigo: "#1a237e",
  royal: "#283593",
  blurple: "#5865f2",
  blurpleSoft: "#7289da",
  glow: "#404eed",
} as const;

type DiscordBackgroundProps = {
  showStars?: boolean;
};

/** Discord-style background: dark indigo base + blurple glow on the right */
const DiscordBackground = ({ showStars = true }: DiscordBackgroundProps) => (
  <Box
    aria-hidden
    sx={{
      position: "fixed",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
      overflow: "hidden",
      bgcolor: discordColors.ink,
    }}
  >
    {/* Gradient 1 — dark top-left → rich indigo base */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background: `
          linear-gradient(155deg, ${discordColors.ink} 0%, ${discordColors.navy} 28%, ${discordColors.indigo} 62%, ${discordColors.royal} 100%)
        `,
      }}
    />
    {/* Gradient 2 — blurple glow behind hero (right side) */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(ellipse 80% 75% at 82% 52%, rgba(88, 101, 242, 0.58) 0%, rgba(64, 78, 237, 0.22) 38%, transparent 62%),
          radial-gradient(ellipse 55% 50% at 68% 78%, rgba(40, 53, 147, 0.45) 0%, transparent 58%),
          linear-gradient(90deg, ${discordColors.ink} 0%, rgba(5, 6, 52, 0.95) 22%, rgba(26, 35, 126, 0.35) 48%, rgba(40, 53, 147, 0.72) 70%, rgba(88, 101, 242, 0.38) 100%)
        `,
      }}
    />
    {showStars && <TwinklingStars />}
  </Box>
);

export default DiscordBackground;
