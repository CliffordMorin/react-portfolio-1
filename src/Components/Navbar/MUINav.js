import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import america from "../../images/america.png";
import japan from "../../images/japan.png";
import { connect } from "react-redux";
import "./Navbar.css";

const MUINav = (props) => {
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
        ["Home", "/#"],
        ["About", "/#About"],
        ["Projects", "/#Projects"],
        ["Contact", "/#Contact"],
      ],
    },
    Japanese: {
      menu: [
        ["ホーム", "/#"],
        ["自己紹介", "/#About"],
        ["プロジェクト", "/#Projects"],
        ["お問い合わせ", "/#Contact"],
      ],
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      className="nav"
      color="success"
      style={{
        opacity: 0.9,
      }}
    >
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
              {content.menu.map((item) => (
                <a href={item[1]} style={{ textDecoration: "none" }}>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    color="inherit"
                    key={item}
                    sx={{ my: 1, color: "green", display: "block" }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item[0]}
                  </MenuItem>
                </a>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {content.menu.map((item) => (
              <a href={item[1]} style={{ textDecoration: "none" }}>
                <Button
                  color="inherit"
                  key={item}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 1, color: "white", display: "block" }}
                  style={{
                    fontSize: "1.2rem",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  {item[0]}
                </Button>
              </a>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  language: state.language,
});
export default connect(mapStateToProps)(MUINav);
