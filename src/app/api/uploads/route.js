import { NextResponse } from 'next/server';

import BASE_IMAGE_URL from '@/lib/baseImageUrl';
import { uploadFile } from '@/lib/uploadFile';

export const POST = async (req) => {
  try {
    const formData = await req.formData();


    const file = formData.getAll('image')[0];
    const imagePath = await uploadFile(file, '/images');

    const imageUrl = `${BASE_IMAGE_URL}/${imagePath}`;
    return NextResponse.json(
      { message: 'Upload file successfull', image_url: imageUrl },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
};
