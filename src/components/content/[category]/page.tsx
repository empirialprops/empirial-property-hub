import React from 'react';

import { CategoryClient } from './CategoryClient';
import { JsonLd, getBreadcrumbSchema } from '@/components/seo/json-ld';

interface PageProps {
  params: { category: string };
}



export default function CategoryPage({ params }: PageProps) {
  const { category } = params;
  const catTitle = category.charAt(0).toUpperCase() + category.slice(1);

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empirialprops.com' },
    { name: `${catTitle} Prop Sector`, url: `https://www.empirialprops.com/${category}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <CategoryClient initialCategory={category} />
    </>
  );
}
