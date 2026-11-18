import React from 'react';

import { SocialFeedClient } from '@/components/social/social-feed-client';
import { JsonLd, getBreadcrumbSchema } from '@/components/seo/json-ld';



export default function BlogPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empirialprops.com' },
    { name: 'State Hall Blog', url: 'https://www.empirialprops.com/blog' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <SocialFeedClient />
    </>
  );
}
