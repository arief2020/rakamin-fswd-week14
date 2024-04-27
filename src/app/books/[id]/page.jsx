import React from 'react';

import DetailBook from '@/components/page/DetailBook';

function page({ params }) {
  const { id } = params;
  return <DetailBook id={id} />;
}

export default page;
