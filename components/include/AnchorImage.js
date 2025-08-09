import Image from 'next/image';
import AnimatedAnchor from './AnimatedAnchor';

// AnchorImage: An animated anchor wrapping a responsive image
export default function AnchorImage({ href, src, alt }) {
    return (
        <AnimatedAnchor href={href}>
            <Image
                src={src}
                alt={alt}
                className="object-cover border-2 border-gray-900 dark:border-blue-100"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
            />
        </AnimatedAnchor>
    );
}
