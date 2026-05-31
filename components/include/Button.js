import AnimatedAnchor from './AnimatedAnchor';

/**
 * Polymorphic Button/Link Component
 * Renders as a button when onClick is provided, as a link when href is provided
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content inside button
 * @param {Function} props.onClick - Click handler (renders as button element)
 * @param {string} props.href - URL for link (renders as link element)
 * @param {boolean} props.openInNewTab - Open link in new tab (default: true)
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.useStyle - Apply default styling (default: true)
 * @returns {React.ReactElement}
 */
export default function Button({
  children,
  onClick,
  href,
  openInNewTab = true,
  className,
  useStyle = true,
}) {
  const styledClass = useStyle
    ? 'bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-blue-100 font-semibold px-4 py-2 border-2 border-gray-900 dark:border-blue-100'
    : 'text-gray-900 dark:text-blue-100 font-semibold px-4 py-2 rounded-md';

  // Render as link if href is provided
  if (href) {
    return (
      <AnimatedAnchor
        href={href}
        openInNewTab={openInNewTab}
        className={className}
      >
        <span className={styledClass}>{children}</span>
      </AnimatedAnchor>
    );
  }

  // Render as button by default
  return (
    <AnimatedAnchor className={className}>
      <button onClick={onClick} className={styledClass}>
        {children}
      </button>
    </AnimatedAnchor>
  );
}