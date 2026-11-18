import React, { Suspense } from 'react';

import { ChallengesClient } from './ChallengesClient';
import { JsonLd, getBreadcrumbSchema } from '@/components/seo/json-ld';



export default function ChallengesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empirialprops.com' },
    { name: 'Challenges Matrix', url: 'https://www.empirialprops.com/challenges' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <ChallengesClient />
      </Suspense>
    </>
  );
}
