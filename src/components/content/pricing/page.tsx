import React from 'react';

import { PricingClient } from './PricingClient';
import { JsonLd, getBreadcrumbSchema } from '@/components/seo/json-ld';



export default function PricingPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empirialprops.com' },
    { name: 'Pricing & Plans', url: 'https://www.empirialprops.com/pricing' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PricingClient />
    </>
  );
}
