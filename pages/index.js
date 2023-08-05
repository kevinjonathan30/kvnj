import { useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Head from "next/head";
import Header from "../components/header.js";
import Services from "../components/services.js";
import Articles from "../components/articles.js";
import Portfolio from "../components/portfolio.js";
import Footer from "../components/footer.js";
import AppContext from "../context/AppContext.js";
import Layout from "./layout.js";

export default function Home() {
  const context = useContext(AppContext);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Layout>
      <div className={context.darkMode ? "dark" : ""}>
        <Head>
          <title>Kevin Jonathan | Software Engineer</title>
          <meta name="description" content="My name is Kevin Jonathan, a highly motivated mobile development engineer specializing in iOS app development and Flutter. I hold a degree from Petra Christian University and have completed the prestigious Apple Developer Academy program." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, archive" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-slate-50 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <motion.div className="progress-bar bg-blue-600 dark:bg-blue-700" style={{ scaleX }} />
          <Header />
          <Services />
          <Articles />
          <Portfolio />
          <Footer />
        </main>
      </div>
    </Layout>
  );
}
