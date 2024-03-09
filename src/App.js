import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDark) => !prevDark);
  }

  return (
    <div className="container">
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main darkMode={darkMode} />
      <Footer />
    </div>
  );
}
