import AnchorImage from './include/AnchorImage';
import berkata from "../public/images/BerKata.jpg";
import kohi from "../public/images/Ko-Hi.jpg";
import juraku from "../public/images/Juraku.jpg";
import jadirelawan from "../public/images/JadiRelawan.jpg";
import speechack from "../public/images/SpeecHack.jpg";

export default function Portfolio() {
    return (
        <section>
            <div className="mt-20">
                <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">UI/UX Design Portfolio</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    Alongside being a software engineer, I also do UI/UX Design freelance for customers.
                </p>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    Here are the list of projects that I have worked before related to UI/UX Design.
                </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="basis-1/3 flex-1">
                    <AnchorImage
                        href={"https://www.behance.net/gallery/138798873/BerKata-Web"}
                        src={berkata}
                        alt="berkata"
                    />
                </div>
                <div className="basis-1/3 flex-1">
                    <AnchorImage
                        href={"https://www.behance.net/gallery/134936171/Ko-Hi"}
                        src={kohi}
                        alt="kohi"
                    />
                </div>
                <div className="basis-1/3 flex-1">
                    <AnchorImage
                        href={"https://www.behance.net/gallery/134151915/Juraku"}
                        src={juraku}
                        alt="juraku"
                    />
                </div>
                <div className="basis-1/3 flex-1">
                    <AnchorImage
                        href={"https://www.behance.net/gallery/134145749/JadiRelawan"}
                        src={jadirelawan}
                        alt="jadirelawan"
                    />
                </div>
                <div className="basis-1/3 flex-1">
                    <AnchorImage
                        href={"https://www.behance.net/gallery/128949225/SpeecHack"}
                        src={speechack}
                        alt="speechack"
                    />
                </div>
                <div className="basis-1/3 flex-1"></div>
            </div>
        </section>
    );
}