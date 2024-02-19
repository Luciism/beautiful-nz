import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { DataContext } from './DataContext';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage'

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
            </Routes>
        </div>
        <Footer/ >
      </Router>
    </DataContext.Provider>
  );
}

export default App;
