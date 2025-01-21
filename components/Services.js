import { useEffect, useContext } from 'react';
import AppContext from '@/context/AppContext';
import localization from '@/public/localization/localization.json';
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
    const context = useContext(AppContext);
    const l = localization[context.language];

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
                <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">{l.servicesTitle}</h3>
                <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                    {l.servicesDescription}
                </p>
            </motion.div>
            <motion.div
                className="lg:flex lg:flex-wrap gap-10"
                initial="hidden"
                animate={controls}
                variants={slideUpVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <ServiceCard
                    icon={<FaPalette className="mx-auto" />}
                    title={l.serviceUiUxDesignTitle}
                    description={l.serviceUiUxDesignDescription}
                    topicTitle={l.serviceUiUxDesignTopicsTitle}
                    topics={l.serviceUiUxDesignTopics}
                    href={"https://www.behance.net/kevinjonathan3010/services/501293/UX-Design-UX"}
                />
                <ServiceCard
                    icon={<FaCode className="mx-auto" />}
                    title={l.serviceSoftwareDevelopmentTitle}
                    description={l.serviceSoftwareDevelopmentDescription}
                    topicTitle={l.serviceSoftwareDevelopmentTopicsTitle}
                    topics={l.serviceSoftwareDevelopmentTopics}
                    href={"https://github.com/kevinjonathan30"}
                />
                <ServiceCard
                    icon={<FaGraduationCap className="mx-auto" />}
                    title={l.serviceStudentTutoringTitle}
                    description={l.serviceStudentTutoringDescription}
                    topicTitle={l.serviceStudentTutoringTopicsTitle}
                    topics={l.serviceStudentTutoringTopics}
                    href={"https://www.teacheron.com/tutor/aRJv?r=aRJv"}
                />
            </motion.div>
        </section>
    );
}
