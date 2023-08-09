import Image from "next/image";
import MotionWrapper from './MotionWrapper';

export default function ImageLink({ href, src, alt }) {
    return (
        <MotionWrapper>
            <a href={href} target="_blank" rel="noopener">
                <Image
                    src={src}
                    className="rounded-lg object-cover border-2"
                    alt={alt}
                />
            </a>
        </MotionWrapper>
    );
}
