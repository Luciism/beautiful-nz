import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { DataContext } from './DataContext';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage'
import Beaches from './pages/Beaches/Beaches';
import Bushes from './pages/Bushes/Bushes';
import Mountains from './pages/Mountains/Mountains';
import NotFound from "./pages/NotFound/NotFound"

function App() {
  const supportedLanguages = ["en", "reo"];
  let selectedLanguage = localStorage.getItem("lang");

  if (!supportedLanguages.includes(selectedLanguage)) {
    selectedLanguage = "en"; // set to default of english if language is invalid
  }

  const [lang, setLang] = useState(selectedLanguage);

  return (
    <DataContext.Provider value={{
      lang: lang,
      setLang: setLang
    }}>
      <Router>
        <Navbar />
        <div className="content">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/explore/beaches" element={<Beaches />} />
              <Route exact path="/explore/bushes" element={<Bushes />} />
              <Route exact path="/explore/mountains" element={<Mountains />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
        <Footer/ >
      </Router>
    </DataContext.Provider>
  );
}

export default App;
