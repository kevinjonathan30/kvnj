import Image from 'next/image';
import AnimatedAnchor from './AnimatedAnchor';

export default function AnchorImage({ href, src, alt }) {
    return (
        <AnimatedAnchor href={href}>
            <Image
                src={src}
                className="object-cover border-2 border-gray-900 dark:border-blue-100"
                alt={alt}
                placeholder="blur"
            />
        </AnimatedAnchor>
    );
}
