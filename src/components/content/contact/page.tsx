import React from 'react';

import { ContactClient } from './ContactClient';
import { JsonLd, getBreadcrumbSchema } from '@/components/seo/json-ld';



export default function ContactPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empirialprops.com' },
    { name: 'Contact Us', url: 'https://www.empirialprops.com/contact' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <ContactClient />
    </>
  );
}
