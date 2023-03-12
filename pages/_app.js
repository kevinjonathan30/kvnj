import '@/styles/globals.css';
import { useState } from 'react';
import AppContext from '../context/AppContext';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      <Component {...pageProps} />
      <Analytics />
    </AppContext.Provider>
  )
}
