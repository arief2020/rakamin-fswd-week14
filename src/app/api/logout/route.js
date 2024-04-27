import { NextResponse } from 'next/server';

import { deleteCookie } from '@/lib/cookie';

export const POST = async () => {
  try {
    deleteCookie('accessToken');

    return NextResponse.json({
      message: 'Logout successful'
    });

  } catch (err) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};
