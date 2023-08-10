import ServiceCard from './include/ServiceCard';
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
                <ServiceCard
                    imageSrc={design}
                    imageAlt="design"
                    title="UI/UX Design"
                    description="Creating clean UI/UX designs suited for your needs following human interface design guidelines."
                    topicTitle="Design tools I use"
                    topics={['Photoshop', 'Figma', 'Sketchbook']}
                    href={"https://be.net/kevinjonathan3010"}
                />

                <ServiceCard
                    imageSrc={code}
                    imageAlt="code"
                    title="Software Development"
                    description="Building softwares, ranging from website and mobile application using clean code and architecture."
                    topicTitle="List of software topics I build"
                    topics={['Web Development', 'Android App Development', 'iOS App Development']}
                    href={"https://github.com/KevinJonathan30"}
                />

                <ServiceCard
                    imageSrc={tutoring}
                    imageAlt="tutoring"
                    title="Student Tutoring"
                    description="Helping students achieve their academic goals by providing personalized tutoring services."
                    topicTitle="Topic I teach"
                    topics={['Mathematics', 'Physics', 'Programming']}
                    href={"mailto:kevinjonathan3010@gmail.com?subject=Tutoring Inquiry&body=Can you teach me.."}
                />
            </div>
        </section>
    );
}