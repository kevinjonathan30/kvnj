import { useContext } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill, BsEnvelopeFill, BsLinkedin, BsGithub, BsBehance } from "react-icons/bs";
import MotionWrapper from "./include/MotionWrapper";
import profile from "../public/images/Profile.jpg";
import AppContext from "../context/AppContext";

export default function Header() {
    const context = useContext(AppContext);
    const socialMediaLinks = [
        {
            icon: <BsEnvelopeFill />,
            link: "mailto:kevinjonathan3010@gmail.com",
        },
        {
            icon: <BsLinkedin />,
            link: "https://www.linkedin.com/in/kevinjonathan-30/",
        },
        {
            icon: <BsGithub />,
            link: "https://github.com/KevinJonathan30",
        },
        {
            icon: <BsBehance />,
            link: "https://www.behance.net/kevinjonathan30",
        },
    ];

    return (
        <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <MotionWrapper>
                    <a href={"./"} rel="noopener noreferrer">
                        <h1 className="text-xl font-burtons">kevinportfolio</h1>
                    </a>
                </MotionWrapper>

                <ul className="flex items-center">
                    <li>
                        <MotionWrapper>
                            <BsFillMoonStarsFill onClick={() => {
                                context.setDarkMode(!context.darkMode)
                            }} className="cursor-pointer text-2xl" />
                        </MotionWrapper>
                    </li>
                    <li>
                        <MotionWrapper>
                            <a
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-md ml-8"
                                href={"/files/Kevin's Resume.pdf"}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                            >
                                Resume
                            </a>
                        </MotionWrapper>
                    </li>
                </ul>
            </nav>
            <div className="text-center p-10">
                <h2 className="text-5xl py-2 text-blue-600 font-medium dark:text-blue-400 md:text-6xl">Kevin Jonathan</h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Software Engineer</h3>
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-200 max-w-lg mx-auto">
                    My name is Kevin Jonathan, a highly motivated mobile development engineer specializing in iOS app development and Flutter. I hold a degree from Petra Christian University and have completed the prestigious Apple Developer Academy program.
                </p>
            </div>
            <div className="text-4xl flex justify-center gap-4 py-3 text-gray-600 dark:text-gray-400">
                {socialMediaLinks.map(({ icon, link }, index) => (
                    <MotionWrapper key={index}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            {icon}
                        </a>
                    </MotionWrapper>
                ))}
            </div>
            <div className="relative mx-auto rounded-full w-72 h-72 mt-20 mb-20 overflow-hidden md:h-80 md:w-80 border-2">
                <Image src={profile} layout="fill" objectFit="cover" alt="profile" />
            </div>
        </section>
    );
}