import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css';
import AppContext from '../context/AppContext';
import Loading from './loading';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const modeMe = (e) => {
    setDarkMode(!!e.matches);
  };

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(matchMedia.matches);
    matchMedia.addEventListener("change", modeMe);
    return () => matchMedia.removeEventListener("change", modeMe);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <AnimatePresence mode="wait">
        <AppContext.Provider value={{ darkMode, setDarkMode }}>
          <Component {...pageProps} />
          <Analytics />
        </AppContext.Provider>
      </AnimatePresence>
    )
  }
}
