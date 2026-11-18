import React from 'react';

import { DealsClient } from '@/components/content/deals/DealsClient';
import { JsonLd, getBreadcrumbSchema } from '@/components/seo/json-ld';

interface PageProps {
  params: { category: string };
}



export default function CategoryDealsPage({ params }: PageProps) {
  const { category } = params;
  const catTitle = category.charAt(0).toUpperCase() + category.slice(1);

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empirialprops.com' },
    { name: `${catTitle} Sector`, url: `https://www.empirialprops.com/${category}` },
    { name: 'Discount Codes', url: `https://www.empirialprops.com/${category}/deals` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <DealsClient />
    </>
  );
}
