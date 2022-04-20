import { Pets } from "@mui/icons-material";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Wowo
        </Typography>
        <Pets sx={{ display: { xs: "none", sm: "block" } }} />
        <Search />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
