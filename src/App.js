import "./App.css";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

// import CTA from "./Components/CTA/CTA";
import { connect } from "react-redux";
import MUINav from "./Components/Navbar/MUINav";
import Fade from "react-reveal/Fade";
import CodingChallenges from "./Components/CodingChallenges/CodingChallenges";

function App(props) {
  console.log(
    "%cHi! Thanks for checking out my code ☺ \n\nThe repo is on my github as 'React Portfolio'. \n\nFind a bug? Feel free to send me a message using my contact form.\n\n",
    "color:green;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
  );

  return (
    <div className="App">
      <MUINav />
      <Landing language={props.language} />
      <Fade big>
        <About language={props.language} />
      </Fade>
      <CodingChallenges language={props.language} />
      {/* <Fade big>
        <CTA />
      </Fade> */}
      <Projects language={props.language} />
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
