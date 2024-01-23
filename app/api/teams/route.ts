import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const teams = await sql`SELECT * FROM teams;`;
    return NextResponse.json({ teams: teams.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { Team_name } = await request.json();
  try {
    const result = await sql`INSERT INTO teams (Team_name) VALUES (${Team_name}) RETURNING *;`;
    return NextResponse.json({ team: result.rows[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
