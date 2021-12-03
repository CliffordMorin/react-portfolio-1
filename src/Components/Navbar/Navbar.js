import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import america from "../../images/america.png";
import japan from "../../images/japan.png";
import { connect } from "react-redux";

const Navbar = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document
      .getElementById("About")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const scrollToProjects = () => {
    document.getElementById("Projects").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .getElementById("Contact")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleChangeLanguageToJapanese = (evt) => {
    props.dispatch({
      type: "CHANGE_LANGUAGE_TO_JAPANESE",
    });
  };

  const handleChangeLanguageToEnglish = (evt) => {
    props.dispatch({
      type: "CHANGE_LANGUAGE_TO_ENGLISH",
    });
  };

  let content = {
    English: {
      menu: [
        ["Home", scrollToTop],
        ["About", scrollToAbout],
        ["Projects", scrollToProjects],
        ["Contact", scrollToContact],
      ],
    },
    Japanese: {
      menu: [
        ["ホーム", scrollToTop],
        ["私について", scrollToAbout],
        ["プロジェクト", scrollToProjects],
        ["お問い合わせ", scrollToContact],
      ],
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" color="success">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {content.menu.map((page) => (
                <MenuItem onClick={page[1]}>
                  <Typography textAlign="center">{page[0]}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {content.menu.map((page) => (
              <Button
                onClick={page[1]}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page[0]}
              </Button>
            ))}
          </Box>
          <MenuItem onClick={handleCloseNavMenu}>
            <div className="flag-div nav-button">
              {props.language === "English" ? (
                <div className="flag-div">
                  <img
                    className="flag"
                    src={japan}
                    alt="Japan Flag"
                    onClick={() => handleChangeLanguageToJapanese()}
                  />
                </div>
              ) : (
                <div className="Japanese">
                  <img
                    className="flag"
                    src={america}
                    alt="America Flag"
                    onClick={() => handleChangeLanguageToEnglish()}
                  />
                </div>
              )}
            </div>
          </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  language: state.language,
});
export default connect(mapStateToProps)(Navbar);
