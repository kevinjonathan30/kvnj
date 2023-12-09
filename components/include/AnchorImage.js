import Image from 'next/image';
import AnimatedAnchor from './AnimatedAnchor';

export default function AnchorImage({ href, src, alt }) {
    return (
        <AnimatedAnchor href={href}>
            <Image
                src={src}
                className="object-cover border-2 border-black dark:border-white"
                alt={alt}
                placeholder="blur"
            />
        </AnimatedAnchor>
    );
}
