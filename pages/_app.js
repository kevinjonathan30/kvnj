import { useState, useEffect } from 'react';
import Head from 'next/head';
import AppContext from '@/context/AppContext';
import WinterEvent from '@/components/include/WinterEvent';
import NextNProgress from 'nextjs-progressbar';
import Loader from '@/components/include/Loader';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/styles/globals.css';
import '@/styles/fonts.css';

export default function App({ Component, pageProps }) {
  // State for dark mode, language, and loader
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Handle dark mode and language detection
    const updateDarkMode = (e) => {
      setDarkMode(e.matches);
    };
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(darkModeMediaQuery.matches);
    darkModeMediaQuery.addEventListener('change', updateDarkMode);

    const updateLanguage = () => {
      const browserLanguage = navigator.language || navigator.userLanguage;
      setLanguage(browserLanguage.startsWith('ja') ? 'ja' : 'en');
    };
    updateLanguage();
    window.addEventListener('languagechange', updateLanguage);

    // Loader logic: show loader for 1.3s on first load
    const timer = setTimeout(() => setLoading(false), 1300);

    return () => {
      darkModeMediaQuery.removeEventListener('change', updateDarkMode);
      window.removeEventListener('languagechange', updateLanguage);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>KVNJ | Kevin Jonathan</title>
        <meta name="description" content="Hello, my name is Kevin Jonathan. I am a graduate student at Waseda University with interests in mobile app development, and UI/UX design. I am currently conducting research in the field of information security. It is a pleasure to meet you." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, archive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && <Loader />}
      {!loading && (
        <>
          <AppContext.Provider value={{ darkMode, setDarkMode, language, setLanguage }}>
            <NextNProgress color="rgb(96, 165, 250)" />
            <WinterEvent />
            <Component {...pageProps} />
          </AppContext.Provider>
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </>
  );
}