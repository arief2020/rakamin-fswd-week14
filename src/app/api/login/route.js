import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    cookies().set({
      name: 'accessToken',
      value: token,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7
    });
    return NextResponse.json({ token });

    // Kirim Response
  } catch (err) {
    if (err.name === 'InvalidCredentials') {
      return NextResponse.json({ message: 'Wrong Email or Password' });
    }
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};
