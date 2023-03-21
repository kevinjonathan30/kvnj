import '@/styles/globals.css';
import { useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const modeMe = (e) => {
    setDarkMode(!!e.matches);
  };

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(matchMedia.matches);
    matchMedia.addEventListener("change", modeMe);
    return () => matchMedia.removeEventListener("change", modeMe);
  }, []);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      <Component {...pageProps} />
      <Analytics />
    </AppContext.Provider>
  )
}
