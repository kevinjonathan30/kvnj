import Image from "next/image";
import design from "../public/images/design.png";
import code from "../public/images/code.png";
import tutoring from "../public/images/tutoring.png";

export default function Services() {
    return (
        <section>
            <div>
                <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    I am currently open to freelance opportunities (private tutoring, web and mobile app development). I have done remote work in providing <span className="text-blue-500 dark:text-blue-400">software and UI/UX design </span> especially for <span className="text-blue-500 dark:text-blue-400">new startups </span> and helped talented people to create their dream digital products and turn their ideas into reality. I am also a freelance student tutor right now teaching mathematics, physics, chemistry, and programming related topics.
                </p>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    I offer from a wide range of services, including software development, UI/UX designing and teaching.
                </p>
            </div>
            <div className="lg:flex gap-10">
                <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-stone-50 dark:bg-gray-800 flex-1">
                    <Image src={design} width={100} height={100} className="mx-auto" alt="design" />
                    <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">UI/UX Design</h3>
                    <p className="py-2 dark:text-gray-300">
                        Creating clean UI/UX designs suited for your needs following human interface design guidelines.
                    </p>
                    <h4 className="py-4 text-blue-600 dark:text-blue-400">Design tools I use</h4>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Photoshop</p>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Illustrator</p>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Adobe XD</p>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Figma</p>
                </div>

                <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-stone-50 dark:bg-gray-800 flex-1">
                    <Image src={code} width={100} height={100} className="mx-auto" alt="code" />
                    <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">Software Development</h3>
                    <p className="py-2 dark:text-gray-300">
                        Building softwares, ranging from website and mobile application using clean code and architecture.
                    </p>
                    <h4 className="py-4 text-blue-600 dark:text-blue-400">List of software topics I build</h4>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Web Development</p>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Android App Development</p>
                    <p className="text-gray-800 py-1 dark:text-gray-300">iOS App Development</p>
                </div>

                <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-stone-50 dark:bg-gray-800 flex-1">
                    <Image src={tutoring} width={100} height={100} className="mx-auto" alt="tutoring" />
                    <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">Student Tutoring</h3>
                    <p className="py-2 dark:text-gray-300">
                        Helping students achieve their academic goals by providing personalized tutoring services.
                    </p>
                    <h4 className="py-4 text-blue-600 dark:text-blue-400">Topic I teach</h4>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Mathematics</p>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Physics</p>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Chemistry</p>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Programming</p>
                </div>
            </div>
        </section>
    );
}