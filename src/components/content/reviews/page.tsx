import React, { Suspense } from 'react';

import { ReviewsClient } from './ReviewsClient';
import { JsonLd, getBreadcrumbSchema } from '@/components/seo/json-ld';



export default function ReviewsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empirialprops.com' },
    { name: 'Trader Reviews', url: 'https://www.empirialprops.com/reviews' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Suspense fallback={<div className="p-12 text-center text-slate-400">Loading Trader Reviews...</div>}>
        <ReviewsClient />
      </Suspense>
    </>
  );
}
