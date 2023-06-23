import { SellerBanner } from "@/components/common/Banner";
import { Button_ } from "@/components/common/Banner/Button";
import { TopHeader, MainHeader } from "@/components/common/Header";
import { NavMain } from "@/components/common/NavBar";
import { DealIcon, ListIcon } from "@/datas/icons";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Breakpoints } from "@/helpers/Breakpoints";
import { TitleSection } from "@/components/common/TitleSection";
import { GetStaticProps } from "next";
import { TopSaveToday } from "@/components/feature/TopSaveToday";

export interface InputProps {
  test: any[];
}

export default function Home({ test }: InputProps) {
  const { Mobile_, Tablet_, Laptop_, Desktop_ } = Breakpoints();

  return (
    <Box>
      <TopHeader />
      <MainHeader />
      <Container maxWidth="desktop" className="flex justify-between py-5">
        <Button_
          sx={{
            backgroundColor: "#0da487",
            fontWeight: "bold",
            fontSize: "18px",
            color: "white",
            alignItems: "center",
            padding: "15px 30px",
          }}
          startIcon={<ListIcon />}
          text="All Categories"
        />
        {Tablet_ && <NavMain />}

        <Button_
          sx={{
            color: "#0da487",
            fontWeight: "bold",
            backgroundColor: "rgba(223, 243, 238, 1)",
          }}
          startIcon={<DealIcon />}
          text="Deal Today"
        />
      </Container>
      <Container className="grid grid-cols-12 gap-[20px]">
        <Box className="col-span-12 sm:col-span-12 md:col-span-6 xl:col-span-3">
          <SellerBanner
            image="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/4.jpg"
            percent="5% OFF"
            maintext="Hot Deals on New Items"
            subtext="Daily Essentials Eggs & Dairy"
          />
        </Box>
        <Box className="col-span-12 sm:col-span-12 md:col-span-6 xl:col-span-3">
          <SellerBanner
            image="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/5.jpg"
            percent="5% OFF"
            maintext="Hot Deals on New Items"
            subtext="Daily Essentials Eggs & Dairy"
          />
        </Box>
        <Box className="col-span-12 sm:col-span-12 md:col-span-6 xl:col-span-3">
          <SellerBanner
            image="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/6.jpg"
            percent="5% OFF"
            maintext="Hot Deals on New Items"
            subtext="Daily Essentials Eggs & Dairy"
          />
        </Box>
        <Box className="col-span-12 sm:col-span-12 md:col-span-6 xl:col-span-3">
          <SellerBanner
            image="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/7.jpg"
            percent="5% OFF"
            maintext="Hot Deals on New Items"
            subtext="Daily Essentials Eggs & Dairy"
          />
        </Box>
      </Container>

      <Container className="w-full h-[200vh]">
        <TitleSection
          maintext="Top Save Today"
          subtext="Don't miss this opportunity at a special discount just for this week."
        />
        <TopSaveToday products={test} />
      </Container>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const test = [
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/9.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/8.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/7.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/6.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/5.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/4.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/3.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/2.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/1.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/10.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/11.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/12.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/13.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/14.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/15.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
  ];

  return {
    props: {
      test,
    },
  };
};
