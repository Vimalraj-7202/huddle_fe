import { Box, keyframes } from "@mui/material";

const twinkle = keyframes`
  0%, 100% { opacity: 0.15; transform: scale(0.85); }
  50% { opacity: 0.95; transform: scale(1.1); }
`;

const twinkleSlow = keyframes`
  0%, 100% { opacity: 0.1; }
  40% { opacity: 0.7; }
  70% { opacity: 0.35; }
`;

const stars = [
  { top: "6%", left: "8%", size: 2, delay: 0, slow: false },
  { top: "12%", left: "22%", size: 3, delay: 1.2, slow: true },
  { top: "18%", left: "45%", size: 2, delay: 0.4, slow: false },
  { top: "8%", left: "62%", size: 2, delay: 2.1, slow: true },
  { top: "24%", left: "14%", size: 2, delay: 0.8, slow: false },
  { top: "32%", left: "35%", size: 3, delay: 1.6, slow: true },
  { top: "28%", left: "58%", size: 2, delay: 0.2, slow: false },
  { top: "40%", left: "8%", size: 2, delay: 1.9, slow: true },
  { top: "48%", left: "26%", size: 2, delay: 0.6, slow: false },
  { top: "44%", left: "48%", size: 3, delay: 2.4, slow: true },
  { top: "52%", left: "68%", size: 2, delay: 1.1, slow: false },
  { top: "58%", left: "18%", size: 2, delay: 0.3, slow: true },
  { top: "64%", left: "42%", size: 2, delay: 1.7, slow: false },
  { top: "70%", left: "10%", size: 3, delay: 2.6, slow: true },
  { top: "76%", left: "32%", size: 2, delay: 0.9, slow: false },
  { top: "72%", left: "55%", size: 2, delay: 1.4, slow: true },
  { top: "82%", left: "20%", size: 2, delay: 2.2, slow: false },
  { top: "88%", left: "40%", size: 3, delay: 0.5, slow: true },
  { top: "15%", left: "78%", size: 2, delay: 1.8, slow: false },
  { top: "36%", left: "82%", size: 2, delay: 0.7, slow: true },
  { top: "60%", left: "75%", size: 2, delay: 2.0, slow: false },
  { top: "84%", left: "62%", size: 2, delay: 1.3, slow: true },
  { top: "22%", left: "5%", size: 2, delay: 2.8, slow: false },
  { top: "50%", left: "5%", size: 2, delay: 0.1, slow: true },
  { top: "90%", left: "8%", size: 2, delay: 1.5, slow: false },
];

const plusStars = [
  { top: "20%", left: "52%", delay: 1.0 },
  { top: "55%", left: "30%", delay: 2.3 },
  { top: "38%", left: "72%", delay: 0.6 },
  { top: "12%", left: "38%", delay: 1.8 },
  { top: "68%", left: "58%", delay: 0.4 },
  { top: "45%", left: "15%", delay: 2.1 },
  { top: "78%", left: "42%", delay: 1.2 },
];

const TwinklingStars = () => (
  <Box
    aria-hidden
    sx={{
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: 0,
    }}
  >
    <Box
      sx={{
        position: "absolute",
        width: 420,
        height: 420,
        top: "12%",
        right: "8%",
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(88, 101, 242, 0.35) 0%, rgba(64, 78, 237, 0.12) 45%, transparent 72%)`,
        filter: "blur(48px)",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        width: 300,
        height: 300,
        bottom: "8%",
        right: "22%",
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(114, 137, 218, 0.28) 0%, transparent 70%)`,
        filter: "blur(40px)",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        width: 200,
        height: 200,
        top: "35%",
        left: "6%",
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(5, 6, 52, 0.55) 0%, rgba(26, 35, 126, 0.15) 50%, transparent 72%)`,
        filter: "blur(32px)",
      }}
    />

    {stars.map((star, index) => (
      <Box
        key={index}
        sx={{
          position: "absolute",
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          borderRadius: "1px",
          bgcolor:
            index % 4 === 0
              ? "rgba(114, 137, 218, 0.85)"
              : "rgba(200, 210, 255, 0.9)",
          boxShadow: `0 0 ${star.size * 2}px rgba(88, 101, 242, 0.45)`,
          animation: `${star.slow ? twinkleSlow : twinkle} ${
            star.slow ? 4 : 2.8
          }s ease-in-out infinite`,
          animationDelay: `${star.delay}s`,
        }}
      />
    ))}

    {plusStars.map((star, index) => (
      <Box
        key={`plus-${index}`}
        sx={{
          position: "absolute",
          top: star.top,
          left: star.left,
          width: 8,
          height: 8,
          opacity: 0.35,
          animation: `${twinkleSlow} 3.5s ease-in-out infinite`,
          animationDelay: `${star.delay}s`,
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            bgcolor: "rgba(114, 137, 218, 0.7)",
          },
          "&::before": {
            top: "50%",
            left: 0,
            width: "100%",
            height: 1,
            transform: "translateY(-50%)",
          },
          "&::after": {
            left: "50%",
            top: 0,
            width: 1,
            height: "100%",
            transform: "translateX(-50%)",
          },
        }}
      />
    ))}
  </Box>
);

export default TwinklingStars;
