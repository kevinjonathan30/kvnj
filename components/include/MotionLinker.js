export default function MotionLinker({ children, href, openInNewTab=true, className }) {
    return (
        <div className="transition-all motion-reduce:transition-none hover:scale-110 active:scale-90 ease-in-out">
            <a href={href} target={openInNewTab ? "_blank" : ""} rel="noopener" className={className}>
                {children}
            </a>
        </div>
    );
}