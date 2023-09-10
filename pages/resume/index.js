import { useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "../../components/Header.js";
import Articles from "../../components/Articles.js";
import Footer from "../../components/Footer.js";
import AppContext from "../../context/AppContext.js";
import AnimatedAnchor from "@/components/include/AnimatedAnchor.js";

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
            <main className="bg-orange-100 px-10 dark:bg-gray-900 min-h-screen md:px-20 lg:px-40">
                <motion.div className="fixed top-0 left-0 right-0 h-2 origin-left z-50 bg-blue-600 dark:bg-blue-700" style={{ scaleX }} />
                <Header />
                <div className="mt-12">
                    <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">Work Experience</h3>
                    <ul className="mb-8 pt-4">
                        <li>
                            <p className="text-sm md:text-base pt-2 dark:text-white">Apr 2022 - Jun 2023: iOS Engineer, Blibli.com, Indonesia</p>
                        </li>
                        <li>
                            <p className="text-sm md:text-base pt-2 dark:text-white">Feb 2021 - Dec 2021: iOS Developer, Apple Developer Academy, Indonesia</p>
                        </li>
                        <li>
                            <p className="text-sm md:text-base pt-2 dark:text-white">Feb 2020 - Dec 2021: Web Developer, Seven7h Edu Course, Indonesia</p>
                        </li>
                        <li>
                            <p className="text-sm md:text-base pt-2 dark:text-white">Jan 2020 - Dec 2021: Student Tutor, Seven7h Edu Course, Indonesia</p>
                        </li>
                    </ul>
                </div>
                <div className="mt-12">
                    <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">Education</h3>
                    <ul className="mb-8 pt-4">
                        <li>
                            <p className="text-sm md:text-base pt-2 dark:text-white">Apr 2024 - 2026 (Est): Waseda University, Japan <em>(M.Eng. in Computer Science)</em></p>
                        </li>
                        <li>
                            <p className="text-sm md:text-base pt-2 dark:text-white">Jul 2018 - Jul 2022: Petra Christian University, Indonesia <em>(B.Comp.Sc. in Informatics)</em></p>
                        </li>
                    </ul>
                </div>
                <div className="mt-12">
                    <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">Publications</h3>
                    <ul className="mb-8 pt-4">
                        <li>
                            <p className="text-sm md:text-base pt-2 dark:text-white">
                                29 Aug 2022: Mobile Application, Location Tracking and Trip Estimation System for Petra Shuttle Bus Using Flutter and Google Maps</p>
                        </li>
                    </ul>
                </div>
                <Footer />
            </main>
        </div>
    );
}
