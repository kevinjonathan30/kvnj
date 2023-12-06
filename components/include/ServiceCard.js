import AnimatedAnchor from './AnimatedAnchor';

export default function ServiceCard({ icon, title, description, topicTitle, topics, href }) {
    return (
        <AnimatedAnchor href={href}>
            <div className="text-center border-2 border-black dark:border-white p-10 my-10 bg-blue-100 dark:bg-gray-800 flex-1">
                <div className="text-6xl md:text-8xl w-full dark:text-white">
                    {icon}
                </div>
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">{title}</h3>
                <p className="py-2 dark:text-gray-300">{description}</p>
                {topics && topics.length > 0 && (
                    <section>
                        <h4 className="py-4 text-blue-600 dark:text-blue-400">{topicTitle}</h4>
                        {topics.map((topic, index) => (
                            <p key={index} className="text-gray-800 py-1 dark:text-gray-300">
                                {topic}
                            </p>
                        ))}
                    </section>
                )}
            </div>
        </AnimatedAnchor>
    );
};
