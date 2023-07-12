import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

const registerUserSchema = z.object({
    email: z.string().regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g, 'Invalid username'),
    password: z.string().min(5, 'Password should be minimum 5 characters'),
});
const prisma = new PrismaClient();
import { getServerSession } from 'next-auth/next'
import { NextResponse } from 'next/server'
import { AuthOptions } from './auth/[...nextauth]/route'

export async function GET(request: Request) {
  const session = await getServerSession(AuthOptions)
  console.log(session)
  return NextResponse.json({authenticated: !!session})
}