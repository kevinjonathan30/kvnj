import '@/styles/globals.css';
import { useState } from 'react';
import AppContext from '../context/AppContext';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return (<AppContext.Provider value={{ darkMode, setDarkMode }}><Component {...pageProps} /></AppContext.Provider>)
}
