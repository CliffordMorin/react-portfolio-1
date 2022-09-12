import "./App.css";
import { connect } from "react-redux";
import "animate.css/animate.min.css";

import {
  LandingV2,  
  About,
  Projects,
  Footer,
  MUINav,
  Blog,
} from "./Components/index";

function App(props : {
  language: string;
} ) {
  console.log(
    "%cHi! Thanks for checking out my code ☺ \n\nThe repo is on my github as 'React Portfolio'. \n\nFind a bug? Feel free to send me a message using my contact form.\n\n",
    "color:green;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
  );

  return (
    <div className="App">
      <MUINav />
      <LandingV2 language={props.language} />
      <About language={props.language} />
      <Projects language={props.language} />
      <Blog language={props.language} />
      <Footer  />
    </div>
  );
}

const mapStateToProps = (state : {
  language: string;
}) => {
  return {
    language: state.language,
  };
};

export default connect(mapStateToProps)(App);
