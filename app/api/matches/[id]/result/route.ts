import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({ message: `Result updated for match ${params.id}` });
}
