import suryapersadainternusa from '../public/images/SuryaPersadaInternusa.png';
import touristicia from '../public/images/Touristicia.png';
import codestroll from '../public/images/CodeStroll.png';
import flicktix from '@/public/images/FlickTix.jpg';
import berkata from '@/public/images/BerKata.jpg';
import kohi from '@/public/images/Ko-Hi.jpg';
import juraku from '@/public/images/Juraku.jpg';
import jadirelawan from '@/public/images/JadiRelawan.jpg';
import speechack from '@/public/images/SpeecHack.jpg';
import AnchorImage from './include/AnchorImage';

export default function Portfolio() {
    const portfolioItems = [
        {
            href: "https://www.behance.net/gallery/189504689/Touristicia",
            src: touristicia,
            alt: "touristicia"
        },
        {
            href: "https://www.behance.net/gallery/189307179/CodeStroll",
            src: codestroll,
            alt: "codestroll"
        },
        {
            href: "https://www.behance.net/gallery/184369913/Surya-Persada-Internusa",
            src: suryapersadainternusa,
            alt: "suryapersadainternusa"
        },
        {
            href: "https://www.behance.net/gallery/180373509/FlickTix",
            src: flicktix,
            alt: "flicktix"
        },
        {
            href: "https://www.behance.net/gallery/138798873/BerKata-Web",
            src: berkata,
            alt: "berkata"
        },
        {
            href: "https://www.behance.net/gallery/134936171/Ko-Hi",
            src: kohi,
            alt: "kohi"
        },
        {
            href: "https://www.behance.net/gallery/134151915/Juraku",
            src: juraku,
            alt: "juraku"
        },
        {
            href: "https://www.behance.net/gallery/134145749/JadiRelawan",
            src: jadirelawan,
            alt: "jadirelawan"
        },
        {
            href: "https://www.behance.net/gallery/128949225/SpeecHack",
            src: speechack,
            alt: "speechack"
        },
    ];

    return (
        <section>
            <div className="mt-20">
                <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">UI/UX Design Portfolio</h3>
                <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                    Alongside being a software engineer, I also do UI/UX Design freelance for customers.
                </p>
                <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                    Here are the list of projects that I have worked before related to UI/UX Design.
                </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                {portfolioItems.map((item, index) => (
                    <div className="basis-1/3 flex-1" key={index}>
                        <AnchorImage {...item} />
                    </div>
                ))}
                {portfolioItems.length % 2 !== 0 && (
                    <div className="basis-1/3 flex-1"></div>
                )}
            </div>
        </section>
    );
}