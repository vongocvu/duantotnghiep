import { Button_ } from "@/components/common/Button";
import { TopHeader, MainHeader } from "@/components/common/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <Box>
      <TopHeader />
      <MainHeader />
      <Container maxWidth="desktop">
        <Button_
          sx={{
            color: "black",
          }}
          color_="success"
          text="Category"
        />
      </Container>
    </Box>
  );
}
