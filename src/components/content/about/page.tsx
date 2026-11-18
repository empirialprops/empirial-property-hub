import React from 'react';

import { AboutClient } from './AboutClient';
import { JsonLd, getBreadcrumbSchema } from '@/components/seo/json-ld';



export default function AboutPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empirialprops.com' },
    { name: 'About Us', url: 'https://www.empirialprops.com/about' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <AboutClient />
    </>
  );
}
