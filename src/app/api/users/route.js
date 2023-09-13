import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?apikey=${process.env.KEY}`,
  );
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request) {
  const data = await request.json;
  return NextResponse.json(data);
}

export async function PUT(request) {
  const data = await request.json;
  return NextResponse.json(data);
}

export async function DELETE(request) {
  const data = await request.json;
  return NextResponse.json(data);
}
