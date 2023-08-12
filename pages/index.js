import { useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "../components/Header.js";
import Services from "../components/Services.js";
import Articles from "../components/Articles.js";
import Portfolio from "../components/Portfolio.js";
import Footer from "../components/Footer.js";
import AppContext from "../context/AppContext.js";

export default function Home() {
  const context = useContext(AppContext);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className={context.darkMode ? "dark" : ""}>
      <main className="bg-gray-50 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <motion.div className="fixed top-0 left-0 right-0 h-2 origin-left z-50 bg-blue-600 dark:bg-blue-700" style={{ scaleX }} />
        <Header />
        <Services />
        <Articles />
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
}
