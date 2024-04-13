// pages/api/users.js

import prisma from '../../lib/prismadb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const users = await prisma.dbuser.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users from database:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
