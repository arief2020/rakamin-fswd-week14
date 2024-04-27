import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export const POST = async (req) => {
  const { name, email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const { ...user } = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });
    return NextResponse.json({ name: user.name, email: user.email });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};
