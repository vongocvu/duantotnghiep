import Card from "@/components/common/Card/Card";
import { Breakpoints } from "@/helpers/Breakpoints";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Slider from "react-slick";

export interface ProductInput {
  products: any[];
}

const TopSaveToday = ({ products }: ProductInput) => {

  const { Mobile_, Tablet_, Laptop_, Desktop_, LargeDesktop_, MoreScreen_ } = Breakpoints();

  const [ NumberSlide, setNumberSlide ] = useState(5);

  let newProducts:any[] = [];

for (let i = 0; i < products.length; i += 2) {
  const sp1 = products[i];
  const sp2 = products[i + 1];
  
  newProducts.push({
    sp1,
    sp2
  });
}

  useEffect(() => {
    if (MoreScreen_ ) setNumberSlide(5)
    if (LargeDesktop_) setNumberSlide(4)
    if (Desktop_) setNumberSlide(4);
    if (Laptop_) setNumberSlide(3);
    if (Tablet_) setNumberSlide(2);
    if (Mobile_) setNumberSlide(2);
    
  }, [Mobile_, Tablet_, Laptop_, Desktop_, LargeDesktop_, MoreScreen_, NumberSlide]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: NumberSlide,
    slidesToScroll: NumberSlide,
  };

  return (
    <Box sx={{
      border: "1px solid #ccc",
      borderBottom: "transparent",
      borderRadius: "10px",
      overflow: "hidden"
    }}>
    <Slider {...settings}>
        {newProducts?.map((data, index) => 
             <Box key={index} >
               <Card
                name={data?.sp1?.name}
                price={data?.sp1?.price}
                id={data?.sp1?.id}
                image={data?.sp1?.image}
              />

              <Card
                name={data?.sp2?.name}
                price={data?.sp2?.price}
                id={data?.sp2?.id}
                image={data?.sp2?.image}
              />
             </Box>
        )}
    </Slider>
   </Box>
  );
};

export default TopSaveToday;


