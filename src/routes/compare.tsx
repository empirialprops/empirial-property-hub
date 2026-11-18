import { createFileRoute, ClientOnly } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
const Page = lazy(() => import('@/components/content/compare/page'));
export const Route = createFileRoute('/compare')({
 head: () => ({meta:[{title:'EMPIRIAL — Compare'},{name:'description',content:'Compare prop trading firms, evaluation challenges, rules, reviews and verified discount codes.'},{property:'og:title',content:'EMPIRIAL — Compare'},{property:'og:description',content:'Compare prop trading firms, evaluation challenges, rules, reviews and verified discount codes.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: ContentPage,
});
function ContentPage() { const params = Route.useParams(); return <ClientOnly fallback={<div className="min-h-screen bg-background" />}><Suspense fallback={<div className="min-h-screen bg-background" />}><Page /></Suspense></ClientOnly>; }
