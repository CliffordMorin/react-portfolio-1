import "./App.css";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { connect } from "react-redux";
import MUINav from "./Components/Navbar/MUINav";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function App(props) {
  return (
    <div className="App">
      <MUINav />
      <Landing language={props.language} />
      <Fade big>
        <About language={props.language} />
      </Fade>
      <Zoom>
        <Projects language={props.language} />
      </Zoom>
      <Fade big>
        <Contact language={props.language} />
      </Fade>
      <Footer language={props.language} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
  };
};

export default connect(mapStateToProps)(App);
