import { Box, Button, Grid } from "@mui/material";

export const pages = ['About Us', 'Games', 'Partner', 'Contact Us']
const Header = () => {
  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);
  };
  return (
    <div className="w-full">
        <Grid container className="bg-stone-900 px-6">
          <Grid container item xs={3} className="flex" sx={{ justifyContent: "flex-start", alignItems: "center" }}>
            <h1 style={{ color: 'white' }}>Logo</h1>
          </Grid>
          <Grid xs={9} className="flex" sx={{ justifyContent: "center" }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
    </div>
  );
};
export default Header;
