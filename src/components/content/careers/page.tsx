import React from 'react';

import { CareersClient } from './CareersClient';
import { JsonLd, getBreadcrumbSchema } from '@/components/seo/json-ld';



export default function CareersPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empirialprops.com' },
    { name: 'Careers & Opportunities', url: 'https://www.empirialprops.com/careers' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <CareersClient />
    </>
  );
}
