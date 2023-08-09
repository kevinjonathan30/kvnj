import { useContext } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { SiGmail, SiLinkedin, SiGithub, SiBehance, SiPixiv } from "react-icons/si";
import { MdClose, MdMinimize, MdSkipPrevious, MdSkipNext, MdOutlinePlayCircleOutline } from "react-icons/md";
import MotionWrapper from "./include/MotionWrapper";
import profile from "../public/images/Profile.png";
import AppContext from "../context/AppContext";

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
            icon: <SiPixiv />,
            link: "https://www.pixiv.net/en/users/71310107",
        },
    ];

    return (
        <section>
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <MotionWrapper>
                    <a href={"./"} rel="noopener">
                        <h1 className="text-xl font-burtons">Kevin Jonathan</h1>
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
                                className="bg-blue-600 text-white px-4 py-2 ml-8 border-2 border-black"
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
                        <a href={link} target="_blank" rel="noopener">
                            {icon}
                        </a>
                    </MotionWrapper>
                ))}
            </div>
            <div>
                <div className="relative mx-auto flex bg-blue-600 w-64 h-8 mt-20 overflow-hidden md:h-8 md:w-72 border-2 border-black border-b-0">
                    <a href={"#"} className="my-auto ml-auto mr-2">
                        <MdMinimize />
                    </a>
                    <a href={"#"} className="my-auto mr-2">
                        <MdClose />
                    </a>
                </div>
                <div className="relative mx-auto bg-blue-300 w-64 h-64 overflow-hidden md:h-72 md:w-72 border-2 border-black">
                    <div className="w-100 h-100 bg-blue-600 absolute"></div>
                    <Image src={profile} layout="fill" objectFit="cover" alt="profile" />
                </div>
                <div className="relative mx-auto flex bg-blue-600 w-64 h-8 mb-20 overflow-hidden md:h-8 md:w-72 border-2 border-black border-t-0">
                    <a href={"#"} className="my-auto ml-auto mr-2">
                        <MdSkipPrevious />
                    </a>
                    <a href={"#"} className="my-auto mr-2 text-xl">
                        <MdOutlinePlayCircleOutline />
                    </a>
                    <a href={"#"} className="my-auto mr-auto">
                        <MdSkipNext />
                    </a>
                </div>
            </div>
        </section>
    );
}