import { Box, Typography } from "@mui/material";

export interface InputProps {
  maintext?: string;
  subtext?: string;
}

const TitleSection = ({ maintext, subtext }: InputProps) => {
  return (
    <Box className="flex py-10">
      <Box>
        <Typography className="font-bold text-2xl">{maintext}</Typography>
        <Typography className="text-md text-gray-500">{subtext}</Typography>
      </Box>
    </Box>
  );
};

export default TitleSection;
