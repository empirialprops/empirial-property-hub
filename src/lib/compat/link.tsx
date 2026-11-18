import { Link as RouterLink } from '@tanstack/react-router';
import { forwardRef, type AnchorHTMLAttributes } from 'react';
type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string | { pathname?: string; query?: Record<string, string> }; prefetch?: boolean; replace?: boolean; scroll?: boolean };
export default forwardRef<HTMLAnchorElement, Props>(function Link({href, prefetch, replace, scroll, ...props}, ref) {
 const url = typeof href === 'string' ? href : `${href.pathname || '/'}${href.query ? '?' + new URLSearchParams(href.query) : ''}`;
 if (!url.startsWith('/') || url.startsWith('//') || props.target === '_blank' || props.download) return <a ref={ref} href={url} {...props} />;
 return <RouterLink ref={ref} to={url} replace={replace} {...props} />;
});
