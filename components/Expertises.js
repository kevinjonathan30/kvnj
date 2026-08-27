// Services: Displays service cards with animation
import { useContext } from 'react';
import AppContext from '@/context/AppContext';
import { motion } from 'framer-motion';
import ServiceCard from './include/ServiceCard';
import { FaCode, FaGraduationCap, FaPalette } from 'react-icons/fa';
import { useLocalization } from '@/hooks/useLocalization';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { slideUpVariants } from '@/lib/animationVariants';

export default function Expertises() {
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
                <h3 className="text-3xl py-1 dark:text-white">{l.expertisesTitle}</h3>
                <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                    {l.expertisesDescription}
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
                    icon={<FaPalette className="mx-auto p-2 cursor-pointer bg-blue-500 dark:bg-blue-400 text-white dark:text-black text-5xl rounded-lg" />}
                    title={l.expertiseUiUxDesignTitle}
                    description={l.expertiseUiUxDesignDescription}
                    topicTitle={l.expertiseUiUxDesignTopicsTitle}
                    topics={l.expertiseUiUxDesignTopics}
                    href="https://www.behance.net/kevinjonathan3010"
                />
                <ServiceCard
                    icon={<FaCode className="mx-auto p-2 cursor-pointer bg-blue-500 dark:bg-blue-400 text-white dark:text-black text-5xl rounded-lg" />}
                    title={l.expertiseSoftwareDevelopmentTitle}
                    description={l.expertiseSoftwareDevelopmentDescription}
                    topicTitle={l.expertiseSoftwareDevelopmentTopicsTitle}
                    topics={l.expertiseSoftwareDevelopmentTopics}
                    href="https://github.com/kevinjonathan30"
                />
                <ServiceCard
                    icon={<FaGraduationCap className="mx-auto p-2 cursor-pointer bg-blue-500 dark:bg-blue-400 text-white dark:text-black text-5xl rounded-lg" />}
                    title={l.expertiseStudentTutoringTitle}
                    description={l.expertiseStudentTutoringDescription}
                    topicTitle={l.expertiseStudentTutoringTopicsTitle}
                    topics={l.expertiseStudentTutoringTopics}
                    href="https://www.teacheron.com/tutor/aRJv?r=aRJv"
                />
            </motion.div>
        </section>
    );
}
