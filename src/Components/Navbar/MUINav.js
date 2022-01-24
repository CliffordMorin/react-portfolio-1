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
import america from "../../images/america.webp";
import japan from "../../images/japan.webp";
import { connect } from "react-redux";
import "./Navbar.css";
import Slide from "react-reveal/Slide";

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
        ["Blog", "/#Blog"],
        ["Contact", "/#Contact"],
      ],
    },
    Japanese: {
      menu: [
        ["ホーム", "/#"],
        ["自己紹介", "/#About"],
        ["プロジェクト", "/#Projects"],
        ["ブログ", "/#Blog"],

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
    <AppBar overflow="visible" position="relative" className="nav">
      <Container maxWidth="100vw">
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
              disableScrollLock={true}
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
                <a
                  href={item[1]}
                  style={{ textDecoration: "none" }}
                  key={Math.random()}
                  className="nav-menu-item"
                >
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    key={Math.random()}
                    sx={{ my: 1, color: "#2e7d32", display: "block" }}
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

          <Box
            overflow="visible"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {content.menu.map((item) => (
              <a
                key={Math.random()}
                href={item[1]}
                style={{ textDecoration: "none" }}
              >
                <Button
                  color="inherit"
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
          <Slide right>
            <Box sx={{ flexGrow: 0 }}>
              <div className="flag-div nav-button">
                {props.language === "English" ? (
                  <div className="flag-div">
                    <span className="nav-span">
                      {" "}
                      日本語を話せますか?&nbsp;&nbsp;{" "}
                    </span>
                    <div className="flag-div-holder">
                      <img
                        className="flag"
                        src={japan}
                        alt="Japan Flag"
                        onClick={() => handleChangeLanguageToJapanese()}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="Japanese">
                    <div className="flag-div-holder">
                      <img
                        className="flag"
                        src={america}
                        alt="America Flag"
                        onClick={() => handleChangeLanguageToEnglish()}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Box>
          </Slide>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  language: state.language,
});
export default connect(mapStateToProps)(MUINav);
