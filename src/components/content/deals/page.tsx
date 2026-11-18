import React from 'react';

import { DealsClient } from './DealsClient';
import { JsonLd, getBreadcrumbSchema } from '@/components/seo/json-ld';



export default function DealsPage() {
  const breadcrumbData = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empirialprops.com' },
    { name: 'Deals & Discounts', url: 'https://www.empirialprops.com/deals' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbData} />
      <DealsClient />
    </>
  );
}
