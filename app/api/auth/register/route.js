// * Minuto 33
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import db from '../../../../src/libs/db';

export async function POST(request) {
  try {
    const data = await request.json();

    const userFound = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    const userNameFound = await db.user.findUnique({
      where: {
        username: data.username,
      },
    });

    if (userFound) {
      return NextResponse.json(
        {
          message: 'Email  already exists',
        },
        {
          status: 400,
        }
      );
    }

    if (userNameFound) {
      return NextResponse.json(
        {
          message: 'Username  already exists',
        },
        {
          status: 400,
        }
      );
    }

    console.log(data);
    const hashPassword = await bcrypt.hash(data.password, 10);
    const newUser = await db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashPassword,
      },
    });

    const { password: _, ...user } = newUser;

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
