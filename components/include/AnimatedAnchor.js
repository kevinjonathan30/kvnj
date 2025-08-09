import Link from 'next/link';

// AnimatedAnchor: A wrapper for animated anchor links
export default function AnimatedAnchor({ children, href, openInNewTab = true, className }) {
    const anchorProps = {
        href: href || undefined,
        target: openInNewTab ? '_blank' : undefined,
        rel: openInNewTab ? 'noopener' : undefined,
        className,
    };

    return (
        <div className="transition-all motion-reduce:transition-none hover:opacity-75 motion-reduce:hover:opacity-100 active:opacity-50 motion-reduce:active:opacity-100 ease-in-out">
            {href ? <Link {...anchorProps}>{children}</Link> : children}
        </div>
    );
}