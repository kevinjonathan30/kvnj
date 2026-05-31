// ServiceCard: Displays a service with icon, title, description, and topics
import AnimatedAnchor from './AnimatedAnchor';

export default function ServiceCard({ icon, title, description, topicTitle, topics, href }) {
    return (
        <div className="lg:basis-0 lg:flex-grow w-full">
            <AnimatedAnchor href={href} hoverEffect={false}>
                <div className="text-center border-2 p-10 my-10 bg-white dark:bg-black rounded-lg hover:border-blue-400 transition-colors duration-300">
                    <div>
                        {icon}
                    </div>
                    <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">{title}</h3>
                    <p className="py-2 dark:text-gray-300">{description}</p>
                    {topics && topics.length > 0 && (
                        <section>
                            <h4 className="py-4 text-blue-700 dark:text-blue-400">{topicTitle}</h4>
                            {topics.map((topic, index) => (
                                <p key={index} className="text-gray-800 py-1 dark:text-gray-300">
                                    {topic}
                                </p>
                            ))}
                        </section>
                    )}
                </div>
            </AnimatedAnchor>
        </div>
    );
}
