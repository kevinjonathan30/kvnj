import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';
import '@/styles/globals.css';
import '@/styles/fonts.css';
import AppContext from '@/context/AppContext';
import WinterEvent from '@/components/include/WinterEvent';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const updateDarkMode = (e) => {
      setDarkMode(e.matches);
    };

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(darkModeMediaQuery.matches); // Set initial dark mode
    darkModeMediaQuery.addEventListener('change', updateDarkMode);

    const updateLanguage = () => {
      const browserLanguage = navigator.language || navigator.userLanguage;
      setLanguage(browserLanguage.startsWith('ja') ? 'ja' : 'en');
    };

    updateLanguage();

    window.addEventListener('languagechange', updateLanguage);

    return () => {
      darkModeMediaQuery.removeEventListener('change', updateDarkMode);
      window.removeEventListener('languagechange', updateLanguage);
    };
  }, []);

  return (
    <>
      <Head>
        <title>KVNJ | Kevin Jonathan</title>
        <meta name="description" content="Hi, I’m Kevin Jonathan. I study and conduct research at Waseda University. I also completed the Apple Developer Academy program and review code for Dicoding Indonesia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, archive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <AppContext.Provider value={{ darkMode, setDarkMode, language, setLanguage }}>
          <NextNProgress color="rgb(96, 165, 250)" />
          <WinterEvent />
          <Component {...pageProps} />
        </AppContext.Provider>
      </>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
