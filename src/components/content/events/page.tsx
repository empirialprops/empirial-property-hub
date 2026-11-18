import React from 'react';

import { EventsClient } from './EventsClient';
import { JsonLd, getBreadcrumbSchema } from '@/components/seo/json-ld';



export default function EventsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empirialprops.com' },
    { name: 'Events & Tournaments', url: 'https://www.empirialprops.com/events' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <EventsClient />
    </>
  );
}
