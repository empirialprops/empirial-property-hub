import React from 'react';

import { ChallengesClient } from '@/components/content/challenges/ChallengesClient';
import { JsonLd, getBreadcrumbSchema } from '@/components/seo/json-ld';

interface PageProps {
  params: { category: string };
}



export default function CategoryChallengesPage({ params }: PageProps) {
  const { category } = params;
  const catTitle = category.charAt(0).toUpperCase() + category.slice(1);

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empirialprops.com' },
    { name: `${catTitle} Sector`, url: `https://www.empirialprops.com/${category}` },
    { name: 'Challenges Table', url: `https://www.empirialprops.com/${category}/challenges` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <ChallengesClient />
    </>
  );
}
