import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");

  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  return (
    <div className="App">
      <Header
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <Landing language={language} />
      <About language={language} />
      <Projects language={language} />
      <Work language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}
function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
