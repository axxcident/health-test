import { sql } from '@vercel/postgres';
// import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

// Återkom till sen för mer detaljerad sökning av användare
// export async function GET(request: NextApiRequest, response: NextApiResponse) {
//   const { email } = request.query || {};

//   try {
//     if (email) {
//       // Fetch a specific user by user_id
//       const user = await sql`SELECT * FROM users WHERE email = ${email as string};`;

//       if (user.rows.length === 0) {
//         return response.json({ message: 'User not found' });
//         // return response.status(404).json({ message: 'User not found' });
//       }
//       return response.json({ user: user.rows[0]});
//       // return response.status(200).json({ user: user.rows[0] });

//     } else {
//       // Fetch all users
//       const users = await sql`SELECT * FROM users;`;
//       return response.json({ users: users.rows });
//       // return response.status(200).json({ users: users.rows });
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     return response.json({ error });
//     // return response.status(500).json({ error });
//   }
// }

export async function GET(request: Request) {
  try {
    const users = await sql`SELECT * FROM users;`;
    return NextResponse.json({ users: users.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}


export async function POST(request: Request) {
  const { email, team_id } = await request.json();

  try {
    const result = await sql`
      INSERT INTO users (email, team_id)
      VALUES (${email}, ${team_id})
      RETURNING *;
    `;

    return NextResponse.json({ user: result.rows[0] }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
