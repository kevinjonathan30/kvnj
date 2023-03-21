import Image from "next/image";
import speechack from "../public/images/SpeecHack.jpg";
import jadirelawan from "../public/images/JadiRelawan.jpg";
import juraku from "../public/images/Juraku.jpg";
import kohi from "../public/images/Ko-Hi.jpg";
import berkata from "../public/images/BerKata.jpg";

export default function Portfolio() {
    return (
        <section>
            <div className="mt-20">
                <h3 className="text-3xl py-1 dark:text-white">UI/UX Portfolio</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    Alongside being a software engineer, I also do <span className="text-blue-500 dark:text-blue-400">UI/UX Design </span> freelance for customers, especially <span className="text-blue-500 dark:text-blue-400">new startups and agencies </span> for their use.
                </p>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    Here are the list of projects that I have worked before related to UI/UX Design.
                </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="basis-1/3 flex-1">
                    <a href={"https://www.behance.net/gallery/138798873/BerKata-Web"} target={'_blank'} >
                        <Image
                            src={berkata}
                            className="rounded-lg object-cover"
                            width={'100%'}
                            height={'100%'}
                            alt="berkata"
                        />
                    </a>
                </div>
                <div className="basis-1/3 flex-1">
                    <a href={"https://www.behance.net/gallery/134936171/Ko-Hi"} target={'_blank'} >
                        <Image
                            src={kohi}
                            className="rounded-lg object-cover"
                            width={'100%'}
                            height={'100%'}
                            alt="kohi"
                        />
                    </a>
                </div>
                <div className="basis-1/3 flex-1">
                    <a href={"https://www.behance.net/gallery/134151915/Juraku"} target={'_blank'} >
                        <Image
                            src={juraku}
                            className="rounded-lg object-cover"
                            width={'100%'}
                            height={'100%'}
                            alt="juraku"
                        />
                    </a>
                </div>
                <div className="basis-1/3 flex-1">
                    <a href={"https://www.behance.net/gallery/134145749/JadiRelawan"} target={'_blank'} >
                        <Image
                            src={jadirelawan}
                            className="rounded-lg object-cover"
                            width={'100%'}
                            height={'100%'}
                            alt="jadirelawan"
                        />
                    </a>
                </div>
                <div className="basis-1/3 flex-1">
                    <a href={"https://www.behance.net/gallery/128949225/SpeecHack"} target={'_blank'} >
                        <Image
                            src={speechack}
                            className="rounded-lg object-cover"
                            width={'100%'}
                            height={'100%'}
                            alt="speechack"
                        />
                    </a>
                </div>
                <div className="basis-1/3 flex-1"></div>
            </div>
        </section>
    );
}