import React from 'react';

import { FirmsClient } from './FirmsClient';
import { JsonLd, getBreadcrumbSchema } from '@/components/seo/json-ld';



export default function FirmsPage() {
  const breadcrumbData = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empirialprops.com' },
    { name: 'Verified Firms', url: 'https://www.empirialprops.com/firms' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbData} />
      <FirmsClient />
    </>
  );
}
