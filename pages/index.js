import Head from 'next/head';
import Header from "../components/header.js";
import Services from "../components/services.js";
import Articles from "../components/articles.js";
import Portfolio from "../components/portfolio.js";
import AppContext from "../context/AppContext.js";
import { useContext } from "react";

export default function Home() {
  const context = useContext(AppContext);

  return (
    <div className={context.darkMode ? "dark" : ""}>
      <Head>
        <title>KevinPortfolio</title>
        <meta name="description" content="Kevin's Personal Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-stone-50 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <Header />
        <Services />
        <Articles />
        <Portfolio />
      </main>
    </div>
  );
}
