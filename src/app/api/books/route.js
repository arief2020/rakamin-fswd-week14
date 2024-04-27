import { NextResponse } from 'next/server';

import BASE_IMAGE_URL from '@/lib/baseImageUrl';
import prisma from '@/lib/prisma';
import { uploadFile } from '@/lib/uploadFile';

export const POST = async (req) => {
  const formData = await req.formData();
  const file = formData.get('image');
  const imagePath = await uploadFile(file, '/images');

  const imageUrl = `${BASE_IMAGE_URL}/${imagePath}`;

  try {
    const book = await prisma.book.create({
      data: {
        title: formData.get('title'),
        author: formData.get('author'),
        publisher: formData.get('publisher'),
        year: parseInt(formData.get('year'), 10),
        pages: parseInt(formData.get('pages'), 10),
        image: imageUrl // add the path to the uploaded image to the book data
      }
    });
    return NextResponse.json(book, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const books = await prisma.book.findMany();
    return NextResponse.json({ books });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};
