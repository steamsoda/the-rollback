import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ matches: [] });
}

export async function POST() {
  return NextResponse.json({ message: 'Match created' });
}
