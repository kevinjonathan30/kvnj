// Services: Displays service cards with animation
import { useContext } from 'react';
import AppContext from '@/context/AppContext';
import { motion } from 'framer-motion';
import ServiceCard from './include/ServiceCard';
import { FaCode, FaGraduationCap, FaPalette } from 'react-icons/fa';
import { useLocalization } from '@/hooks/useLocalization';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { slideUpVariants } from '@/lib/animationVariants';

export default function Services() {
    const { ref, controls } = useScrollAnimation();
    const context = useContext(AppContext);
    const l = useLocalization();

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
                    href="https://www.behance.net/kevinjonathan3010"
                />
                <ServiceCard
                    icon={<FaCode className="mx-auto" />}
                    title={l.serviceSoftwareDevelopmentTitle}
                    description={l.serviceSoftwareDevelopmentDescription}
                    topicTitle={l.serviceSoftwareDevelopmentTopicsTitle}
                    topics={l.serviceSoftwareDevelopmentTopics}
                    href="https://github.com/kevinjonathan30"
                />
                <ServiceCard
                    icon={<FaGraduationCap className="mx-auto" />}
                    title={l.serviceStudentTutoringTitle}
                    description={l.serviceStudentTutoringDescription}
                    topicTitle={l.serviceStudentTutoringTopicsTitle}
                    topics={l.serviceStudentTutoringTopics}
                    href="https://calendar.app.google/Vg9egaVjzCngS1Fb7"
                />
            </motion.div>
        </section>
    );
}
