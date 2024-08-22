import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ServiceCard from './include/ServiceCard';
import { FaCode, FaGraduationCap, FaPalette } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

export default function Services() {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <section ref={ref}>
            <motion.div
                className="mt-20"
                initial="hidden"
                animate={controls}
                variants={slideUpVariants}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">Services I Offer</h3>
                <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                    I offer from a wide range of services, including UI/UX designing, software development and student tutoring.
                </p>
            </motion.div>
            <motion.div
                className="lg:flex gap-10"
                initial="hidden"
                animate={controls}
                variants={slideUpVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
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
                    topics={['Software Engineering', 'UI/UX Design', 'Other (Request)']}
                    href={"https://calendar.app.google/tWdyx95wB8hLPdHw8"}
                />
            </motion.div>
        </section>
    );
}
