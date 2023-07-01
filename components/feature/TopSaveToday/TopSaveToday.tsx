import Card from "@/components/common/Card/Card";
import Box from "@mui/material/Box";

export interface ProductInput {
  products: any[];
}

const TopSaveToday = ({ products }: ProductInput) => {
  return (
    <Box
      sx={{
        borderTop: "1px solid #ccc",
        borderLeft: "1px solid #ccc",
      }}
      className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12"
    >
      {products?.map((product) => (
        <Card
          className="col-span-2"
          key={product?.id}
          name={product?.name}
          price={product?.price}
          id={product?.id}
          image={product?.image}
        />
      ))}
    </Box>
  );
};

export default TopSaveToday;
