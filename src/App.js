import "./App.css";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { connect } from "react-redux";
import MUINav from "./Components/Navbar/MUINav";

function App(props) {
  require("dotenv").config();
  return (
    <div className="App">
      {/* <Navbar language={props.language} /> */}
      <MUINav />
      <Landing language={props.language} />
      <About language={props.language} />
      <Projects language={props.language} />
      <Contact language={props.language} />
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
