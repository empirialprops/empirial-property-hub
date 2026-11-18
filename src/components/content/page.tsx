import React from 'react';

import { HomeClient } from '@/components/home/HomeClient';
import { JsonLd, getWebSiteSchema } from '@/components/seo/json-ld';



export default function HomePage() {
  return (
    <>
      <JsonLd data={getWebSiteSchema()} />
      <HomeClient />
    </>
  );
}
