import { useContext } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { SiGmail, SiLinkedin, SiGithub, SiBehance, SiYoutube } from "react-icons/si";
import { MdClose, MdMinimize, MdSkipPrevious, MdSkipNext, MdPlayArrow } from "react-icons/md";
import AnimatedAnchor from "./include/AnimatedAnchor";
import profile from "../public/images/Profile.png";
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
        {
            icon: <SiYoutube />,
            link: "https://www.youtube.com/@kev.journal",
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
                    <li className={"ml-8"}>
                        <Button href={"/files/Kevin's Resume.pdf"}>Resume</Button>
                    </li>
                </ul>
            </nav>
            <div className="text-center p-10">
                <h2 className="font-gloriaHallelujah text-5xl py-2 text-blue-600 font-medium dark:text-blue-400 md:text-6xl">Kevin Jonathan</h2>
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
            <div>
                <div className="relative mx-auto flex bg-blue-600 dark:bg-blue-400 w-64 h-8 mt-16 overflow-hidden md:h-8 md:w-72 border-2 border-black border-b-0">
                    <div className="my-auto ml-auto mr-2">
                        <MdMinimize />
                    </div>
                    <div className="my-auto mr-2">
                        <MdClose />
                    </div>
                </div>
                <div className="relative mx-auto bg-teal-100 w-64 h-48 overflow-hidden md:h-60 md:w-72 border-2 border-black">
                    <Image src={profile} layout="fill" objectFit="cover" alt="profile" />
                </div>
                <div className="relative mx-auto flex bg-blue-600 dark:bg-blue-400 w-64 h-9 mb-20 overflow-hidden md:h-9 md:w-72 border-2 border-black border-t-0">
                    <div className="my-auto ml-auto mr-2">
                        <AnimatedAnchor href={"https://www.youtube.com/@kev.journal"}>
                            <MdSkipPrevious />
                        </AnimatedAnchor>
                    </div>
                    <div className="my-auto mr-2 text-xl">
                        <AnimatedAnchor href={"https://www.youtube.com/@kev.journal"}>
                            <MdPlayArrow className="bg-white rounded-full border-2 border-black" />
                        </AnimatedAnchor>
                    </div>
                    <div className="my-auto mr-auto">
                        <AnimatedAnchor href={"https://www.youtube.com/@kev.journal"}>
                            <MdSkipNext />
                        </AnimatedAnchor>
                    </div>
                </div>
            </div>
        </section>
    );
}