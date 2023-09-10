import { useContext } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { SiGmail, SiLinkedin, SiGithub, SiBehance } from "react-icons/si";
import AnimatedAnchor from "./include/AnimatedAnchor";
import AppContext from "../context/AppContext";
import Button from './include/Button';

export default function Header() {
    const context = useContext(AppContext);
    const socialMediaLinks = [
        {
            icon: <SiBehance />,
            link: "https://be.net/kevinjonathan3010",
        },
        {
            icon: <SiGithub />,
            link: "https://github.com/KevinJonathan30",
        },
        {
            icon: <SiGmail />,
            link: "mailto:kevinjonathan3010@gmail.com",
        },
        {
            icon: <SiLinkedin />,
            link: "https://www.linkedin.com/in/kevinjonathan3010",
        },
    ];

    return (
        <section>
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <AnimatedAnchor href={"./"} openInNewTab={false}>
                    <h1 className="text-xl font-burtons">KevinJonathan</h1>
                </AnimatedAnchor>

                <ul className="flex items-center">
                    <li>
                        <AnimatedAnchor>
                            <BsFillMoonStarsFill onClick={() => {
                                context.setDarkMode(!context.darkMode)
                            }} className="cursor-pointer text-2xl" />
                        </AnimatedAnchor>
                    </li>
                    {/* <li className={"ml-8"}>
                        <Button href={"/files/Kevin's Resume.pdf"}>Resume</Button>
                    </li> */}
                </ul>
            </nav>
            <div className="text-center p-10">
                <h2 className="font-gloriaHallelujah text-5xl py-2 text-blue-600 font-semibold tracking-wide dark:text-blue-400 md:text-6xl">Kevin Jonathan</h2>
                <h3 className="font-gloriaHallelujah text-2xl py-2 dark:text-white md:text-3xl">Software Engineer</h3>
                <p className="text-md md:text-xl font-normal py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-lg mx-auto">
                    My name is Kevin Jonathan, a highly motivated mobile development engineer specializing in iOS app development and Flutter. I hold a degree from Petra Christian University and have completed the prestigious Apple Developer Academy program.
                </p>
            </div>
            <div className="text-4xl flex justify-center gap-4 py-3 text-gray-600 dark:text-gray-400">
                {socialMediaLinks.map(({ icon, link }, index) => (
                    <AnimatedAnchor key={index} href={link}>
                        {icon}
                    </AnimatedAnchor>
                ))}
            </div>
            {/* <ProfilePicture /> */}
        </section>
    );
}