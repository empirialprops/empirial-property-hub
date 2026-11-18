import { createFileRoute, ClientOnly } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
const Page = lazy(() => import('@/components/content/careers/page'));
export const Route = createFileRoute('/careers')({
 head: () => ({meta:[{title:'EMPIRIAL — Careers'},{name:'description',content:'Compare prop trading firms, evaluation challenges, rules, reviews and verified discount codes.'},{property:'og:title',content:'EMPIRIAL — Careers'},{property:'og:description',content:'Compare prop trading firms, evaluation challenges, rules, reviews and verified discount codes.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: ContentPage,
});
function ContentPage() { const params = Route.useParams(); return <ClientOnly fallback={<div className="min-h-screen bg-background" />}><Suspense fallback={<div className="min-h-screen bg-background" />}><Page /></Suspense></ClientOnly>; }
