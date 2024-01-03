import { FaBehanceSquare, FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import AnimatedAnchor from './include/AnimatedAnchor';

export default function Header() {
    const socialMediaLinks = [
        {
            icon: <FaBehanceSquare />,
            link: "https://be.net/kevinjonathan3010",
        },
        {
            icon: <FaGithubSquare />,
            link: "https://github.com/KevinJonathan30",
        },
        {
            icon: <FaEnvelopeSquare />,
            link: "mailto:kevinjonathan3010@gmail.com",
        },
        {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/kevinjonathan3010",
        },
    ];

    return (
        <section>
            <div className="text-center p-10">
                <h2 className="font-gloriaHallelujah text-5xl py-2 text-blue-700 dark:text-blue-400 font-semibold tracking-wide  md:text-6xl">Kevin Jonathan</h2>
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