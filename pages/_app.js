import '@/styles/globals.css';
import { useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';

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
    <AnimatePresence mode="wait" initial={false}>
      <AppContext.Provider value={{ darkMode, setDarkMode }}>
        <Component {...pageProps} />
        <Analytics />
      </AppContext.Provider>
    </AnimatePresence>
  )
}
