import { useContext } from "react";
import Header from "../components/Header.js";
import Services from "../components/Services.js";
import Articles from "../components/Articles.js";
import Footer from "../components/Footer.js";
import AppContext from "../context/AppContext.js";

export default function Home() {
  const context = useContext(AppContext);

  return (
    <div className={context.darkMode ? "dark" : ""}>
      <main className="bg-blue-200 px-10 dark:bg-gray-900 min-h-screen md:px-20 lg:px-40">
        <Header />
        <Services />
        <Articles />
        <Footer />
      </main>
    </div>
  );
}
