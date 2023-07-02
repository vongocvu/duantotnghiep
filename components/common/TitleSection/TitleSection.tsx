import { Box, Typography } from "@mui/material";

export interface InputProps {
  maintext?: string;
  subtext?: string;
}

const TitleSection = ({ maintext, subtext }: InputProps) => {
  return (
    <Box className="flex pb-10">
      <Box>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          {maintext}
        </Typography>
        <Typography className="text-md text-gray-500">{subtext}</Typography>
      </Box>
    </Box>
  );
};

export default TitleSection;
