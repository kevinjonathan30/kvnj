import { useContext } from "react";
import Footer from "../../components/Footer.js";
import AppContext from "../../context/AppContext.js";
import Navigation from "@/components/Navigation.js";
import Portfolio from "@/components/Portfolio.js";

export default function Home() {
    const context = useContext(AppContext);

    return (
        <div className={context.darkMode ? "dark" : ""}>
            <main className="bg-blue-200 px-10 dark:bg-gray-900 min-h-screen md:px-20 lg:px-40">
                <Navigation />
                <Portfolio />
                <Footer />
            </main>
        </div>
    );
}
