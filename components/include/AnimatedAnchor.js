import Link from 'next/link';

// AnimatedAnchor: A wrapper for animated anchor links
export default function AnimatedAnchor({ children, href, openInNewTab = true, className, hoverEffect = true }) {
    const anchorProps = {
        href: href || undefined,
        target: openInNewTab ? '_blank' : undefined,
        rel: openInNewTab ? 'noopener' : undefined,
        className,
    };

    const baseClass = hoverEffect
        ? "transition-all motion-reduce:transition-none hover:opacity-75 motion-reduce:hover:opacity-100 active:opacity-50 motion-reduce:active:opacity-100 ease-in-out"
        : "transition-all motion-reduce:transition-none ease-in-out";

    return (
        <div className={baseClass}>
            {href ? <Link {...anchorProps}>{children}</Link> : children}
        </div>
    );
}