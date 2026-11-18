import { createFileRoute, ClientOnly } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
const Page = lazy(() => import('@/components/content/[category]/deals/page'));
export const Route = createFileRoute('/$category_/deals')({
 head: ({params}) => { const subject = Object.values(params).join(' ').replaceAll('-', ' '); const title = `EMPIRIAL — ${subject} Discount codes`; const description = `Explore ${subject} discount codes on EMPIRIAL.`; return {meta:[{title},{name:'description',content:description},{property:'og:title',content:title},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}; },
 component: ContentPage,
});
function ContentPage() { const params = Route.useParams(); return <ClientOnly fallback={<div className="min-h-screen bg-background" />}><Suspense fallback={<div className="min-h-screen bg-background" />}><Page {...({params})} /></Suspense></ClientOnly>; }
