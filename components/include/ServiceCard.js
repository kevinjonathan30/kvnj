import AnimatedAnchor from './AnimatedAnchor';

export default function ServiceCard({ icon, title, description, topicTitle, topics, href }) {
    return (
        <div className='lg:basis-0 lg:flex-grow w-full'>
            <AnimatedAnchor href={href}>
                <div className="text-center border-2 border-gray-900 dark:border-blue-100 p-10 my-10 bg-blue-100 dark:bg-gray-900 rounded-md">
                    <div className="text-6xl md:text-8xl w-full text-gray-900 dark:text-blue-100">
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
};
