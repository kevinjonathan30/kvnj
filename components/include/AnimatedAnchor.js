export default function AnimatedAnchor({ children, href, openInNewTab=true, className }) {
    return (
        <div className="transition-all motion-reduce:transition-none hover:scale-110 motion-reduce:hover:scale-100 active:scale-90 motion-reduce:active:scale-100 ease-in-out">
            <a href={href} target={openInNewTab ? "_blank" : ""} rel="noopener" className={className}>
                {children}
            </a>
        </div>
    );
}