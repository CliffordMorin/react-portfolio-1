import "./App.css";

import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <Header language={props.language} />
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
