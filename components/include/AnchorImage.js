import Image from 'next/image';
import AnimatedAnchor from './AnimatedAnchor';

// AnchorImage: An animated anchor wrapping a responsive image
export default function AnchorImage({ href, src, alt }) {
    return (
        <AnimatedAnchor href={href} hoverEffect={false}>
            <Image
                src={src}
                alt={alt}
                className="object-cover border-2 rounded-lg hover:border-blue-400 transition-colors duration-300"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
            />
        </AnimatedAnchor>
    );
}
