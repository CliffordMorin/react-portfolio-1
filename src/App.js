import "./App.css";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { connect } from "react-redux";
import MUINav from "./Components/Navbar/MUINav";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function App(props) {
  return (
    <div className="App">
      <MUINav />
      <Landing language={props.language} />
      <Fade big>
        <About language={props.language} />
      </Fade>
      <Fade small>
        <Projects language={props.language} />
      </Fade>
      <Slide bottom>
        <Contact language={props.language} />
      </Slide>
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
