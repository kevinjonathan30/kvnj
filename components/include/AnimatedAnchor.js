import Link from 'next/link'

export default function AnimatedAnchor({ children, href, openInNewTab = true, className }) {
    const anchorProps = {
        href: href || undefined,
        target: openInNewTab ? "_blank" : undefined,
        rel: "noopener",
        className: className,
    };

    return (
        <div className="transition-all motion-reduce:transition-none hover:scale-110 motion-reduce:hover:scale-100 active:scale-90 motion-reduce:active:scale-100 ease-in-out">
            {href ? <Link {...anchorProps}>{children}</Link> : children}
        </div>
    );
}