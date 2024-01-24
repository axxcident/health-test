import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { session_id, user_id, team_id, happiness, productivity, stress, comment } = await request.json();

  try {
    const result = await sql`
      INSERT INTO checkin_entries (session_id, user_id, team_id, happiness, productivity, stress, comment)
      VALUES (${session_id}, ${user_id}, ${team_id}, ${happiness}, ${productivity}, ${stress}, ${comment})
      RETURNING *;
    `;

    return NextResponse.json({ entry: result.rows[0] }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}


// Error handling
// export async function POST(request: Request) {
//   const { happiness, productivity, stress } = await request.json();

//   try {
//     console.log('SQL Query:', sql`
//       INSERT INTO checkin_entries (happiness, productivity, stress)
//       VALUES (${happiness}, ${productivity}, ${stress})
//       RETURNING *;
//     `);

//     const result = await sql`
//       INSERT INTO checkin_entries (happiness, productivity, stress)
//       VALUES (${happiness}, ${productivity}, ${stress})
//       RETURNING *;
//     `;

//     console.log('Result:', result);

//     return NextResponse.json({ entry: result.rows[0] }, { status: 200 });
//   } catch (error) {
//     console.error('Error:', error);
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }


export async function GET(request: Request) {
  try {
    const checkin_entries = await sql`SELECT * FROM checkin_entries;`;
    return NextResponse.json({ checkin_entries: checkin_entries.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
