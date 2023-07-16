import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import Box from "@mui/material/Box";
import { Breakpoints } from "@/helpers/Breakpoints";

export interface InputBase {

}

const Search = () => {
  const { Mobile_, Tablet_, Laptop_, Desktop_, LargeDesktop_, MoreScreen_ } = Breakpoints();

  if (Desktop_) return <SearchIcon />;

  return (
    <Box
      sx={{
        width: "100%",
        height: "50px",
        display: "flex",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
          justifyContent: "space-between",
          "&:focus-within": {
            borderColor: "#0da487",
          },
        }}
      >
        <InputBase
          sx={{
            height: "100%",
            padding: "0 10px",
            flex: "1",
          }}
          placeholder="Nhập sản phẩm cần tìm kiếm ..."
        />
      </Box>
      <Box
        sx={{
          width: "60px",
          height: "100%",
          backgroundColor: "#ffa53b",
          color: "primary.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <SearchIcon />
      </Box>
    </Box>
  );
};

export default Search;
