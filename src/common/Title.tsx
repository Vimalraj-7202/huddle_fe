import { Typography, Box } from "@mui/material";

import type { TitleProps } from "@/types/title.type";

const Title = ({ title, subtitle }: TitleProps) => (
  <Box sx={{ mb: 1 }}>
    <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#1f2937" }}>
      {title}
    </Typography>
    {subtitle && (
      <Typography sx={{ fontSize: 12, color: "#6b7280" }}>
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default Title;
