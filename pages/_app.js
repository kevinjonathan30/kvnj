import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import '@/styles/globals.css';
import '@/styles/fonts.css';
import AppContext from '@/context/AppContext';
import WinterEvent from '@/components/include/WinterEvent';
import NextNProgress from 'nextjs-progressbar';

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
    <>
      <Head>
        <title>Kevin Jonathan | Software Engineer</title>
        <meta name="description" content="My name is Kevin Jonathan, a highly motivated mobile development engineer specializing in iOS app development and Flutter. I hold a degree from Petra Christian University and have completed the prestigious Apple Developer Academy program." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, archive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence mode="wait">
        <AppContext.Provider value={{ darkMode, setDarkMode }}>
          <NextNProgress />
          <WinterEvent />
          <Component {...pageProps} />
          <Analytics />
        </AppContext.Provider>
      </AnimatePresence>
    </>
  );
}
