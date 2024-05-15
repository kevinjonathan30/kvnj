import ServiceCard from './include/ServiceCard';
import { FaCode, FaGraduationCap, FaPalette } from 'react-icons/fa';

export default function Services() {
    return (
        <section>
            <div className="mt-20">
                <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">Services I Offer</h3>
                <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                    I offer from a wide range of services, including UI/UX designing, software development and student tutoring.
                </p>
            </div>
            <div className="lg:flex gap-10">
                <ServiceCard
                    icon={<FaPalette className="mx-auto" />}
                    title="UI/UX Design"
                    description="Creating clean UI/UX designs suited for your needs following human interface design guidelines."
                    topicTitle="Design tools I use"
                    topics={['Photoshop', 'Figma', 'Adobe XD']}
                    href={"https://be.net/kevinjonathan3010"}
                />

                <ServiceCard
                    icon={<FaCode className="mx-auto" />}
                    title="Software Development"
                    description="Building softwares, ranging from website and mobile application using clean code and architecture."
                    topicTitle="Software topics I build"
                    topics={['Web Development', 'Android App Development', 'iOS App Development']}
                    href={"https://github.com/KevinJonathan30"}
                />

                <ServiceCard
                    icon={<FaGraduationCap className="mx-auto" />}
                    title="Student Tutoring"
                    description="Helping students achieve their academic goals by providing personalized tutoring services."
                    topicTitle="Topics I teach"
                    topics={['Computer Science', 'UI/UX Design', 'Other (Request)']}
                    href={"https://calendar.app.google/tWdyx95wB8hLPdHw8"}
                />
            </div>
        </section>
    );
}