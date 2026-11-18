import type { ImgHTMLAttributes } from 'react';
type Props = ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean; unoptimized?: boolean; quality?: number };
export default function Image({fill, priority, unoptimized, quality, className, ...props}: Props) { return <img {...props} className={`${fill ? 'absolute inset-0 h-full w-full ' : ''}${className || ''}`} loading={priority ? 'eager' : props.loading || 'lazy'} />; }
