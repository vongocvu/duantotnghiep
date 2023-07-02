import Slider from "react-slick";
import { SellerBanner } from "@/components/common/Banner";
import { Button_ } from "@/components/common/Button";
import { TopHeader, MainHeader } from "@/components/common/Header";
import { NavClient, NavMain } from "@/components/common/NavBar";
import { DealIcon, ListIcon } from "@/datas/icons";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Breakpoints } from "@/helpers/Breakpoints";
import { TitleSection } from "@/components/common/TitleSection";
import { GetStaticProps } from "next";
import { TopSaveToday } from "@/components/feature/TopSaveToday";
import { useEffect, useState } from "react";

export interface InputProps {
  test: any[];
  NavCategory: any[];
}

export default function Home({ test, NavCategory }: InputProps) {
  const { Mobile_, Tablet_, Laptop_, Desktop_, LargeDesktop_, MoreScreen_ } = Breakpoints();

  const [NumberSlide, setNumberSlide] = useState(4);

  useEffect(() => {
    if (LargeDesktop_) setNumberSlide(4)
    if (Desktop_) setNumberSlide(3);
    if (Laptop_) setNumberSlide(2);
    if (Tablet_) setNumberSlide(2);
    if (Mobile_) setNumberSlide(1);
    
  }, [Mobile_, Tablet_, Laptop_, Desktop_, LargeDesktop_, NumberSlide]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: NumberSlide,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <TopHeader />
      <MainHeader />
      {
        !Mobile_ && <Container
        sx={{
          display: "flex !important",
          marginTop: "20px"
        }}
        className="flex justify-between"
      >
        <Button_
          sx={{
            backgroundColor: "#0da487",
            fontWeight: "bold",
            fontSize: "16px",
            color: "white",
            alignItems: "center",
            padding: "5px 15px",
          }}
          startIcon={<ListIcon />}
          text="All Categories"
        />
        {!Desktop_ && <NavMain />}

        <Button_
          sx={{
            color: "#0da487",
            fontWeight: "bold",
            backgroundColor: "rgba(223, 243, 238, 1)",
          }}
          startIcon={<DealIcon />}
          text={`${!Tablet_ ? "Deal Today" : ""}`}
        />
      </Container>
      }
      <Container sx={{
        marginTop: "20px"
      }}>
        <Slider {...settings}>
          <Box>
            <SellerBanner
              image="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/4.jpg"
              percent="5% OFF"
              maintext="Hot Deals on New Items"
              subtext="Daily Essentials Eggs & Dairy"
            />
          </Box>
          <Box>
            <SellerBanner
              image="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/5.jpg"
              percent="5% OFF"
              maintext="Hot Deals on New Items"
              subtext="Daily Essentials Eggs & Dairy"
            />
          </Box>
          <Box>
            <SellerBanner
              image="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/6.jpg"
              percent="5% OFF"
              maintext="Hot Deals on New Items"
              subtext="Daily Essentials Eggs & Dairy"
            />
          </Box>
          <Box>
            <SellerBanner
              image="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/7.jpg"
              percent="5% OFF"
              maintext="Hot Deals on New Items"
              subtext="Daily Essentials Eggs & Dairy"
            />
          </Box>
        </Slider>
      </Container>

      <Container
        sx={{
          display: "flex",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {MoreScreen_ && (
          <Box
            sx={{
              width: "380px",
              height: "100%",
              backgroundColor: "#f8f8f8",
              borderRadius: "5px",
              padding: "50px",
            }}
          >
            <Box
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Category
            </Box>
            <NavClient datas={NavCategory} />
          </Box>
        )}

        <Box
          sx={{
            flex: "1",
          }}
        >
          <TitleSection
            maintext="Top Save Today"
            subtext="Don't miss this opportunity at a special discount just for this week."
          />
          <TopSaveToday products={test} />
        </Box>
      </Container>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const NavCategory = [
    {
      id: "1",
      title: "Vegetables & Fruit",
      path: "navigation",
      icon: "https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg",
    },
    {
      id: "2",
      title: "Beverages",
      path: "navigation",
      icon: "https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg",
    },
    {
      id: "3",
      title: "Meats & Seafood",
      path: "navigation",
      icon: "https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg",
    },
    {
      id: "4",
      title: "Breakfast & Dairy",
      path: "navigation",
      icon: "https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg",
    },
    {
      id: "5",
      title: "Frozen Foods",
      path: "navigation",
      icon: "	https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg",
    },
    {
      id: "6",
      title: "NavigBiscuits & Snacksation",
      path: "navigation",
      icon: "https://themes.pixelstrap.com/fastkart/assets/svg/1/biscuit.svg",
    },
    {
      id: "7",
      title: "Grocery & Staples",
      path: "navigation",
      icon: "	https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg",
    },
    {
      id: "8",
      title: "Wines & Alcohol Drinks",
      path: "navigation",
      icon: "https://themes.pixelstrap.com/fastkart/assets/svg/1/drink.svg",
    },
    {
      id: "9",
      title: "Milk & Dairies",
      path: "navigation",
      icon: "https://themes.pixelstrap.com/fastkart/assets/svg/1/milk.svg",
    },
  ];

  const test = [
    {
      id: "test",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/9.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test1",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/8.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test2",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/7.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test3",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/6.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test4",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/5.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test5",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/4.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test6",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/3.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test7",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/2.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test8",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/1.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test9",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/10.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test10",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/11.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test11",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/12.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test12",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/13.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test13",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/14.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
    {
      id: "test14",
      image:
        "https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/15.png",
      name: "Raw Mutton Leg, Packaging 5 Kg",
      price: 2669,
    },
  ];

  return {
    props: {
      test,
      NavCategory,
    },
  };
};
