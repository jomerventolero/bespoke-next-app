import { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if the request method is POST
  if (req.method === 'POST') {
    // Initialize PocketBase instance
    const pb = new PocketBase('http://192.168.0.60:8090');

    try {
      // Example data to create a user
      const data = {
        "username": "test_username",
        "email": "test@example.com",
        "emailVisibility": true,
        "password": "12345678",
        "passwordConfirm": "12345678",
        "name": "test",
        "department": "administration",
        "contact": 123,
        "role": "admin"
      };

      // Create the user record
      const record = await pb.collection('users').create(data);

      // Send a success response with the created record
      res.status(200).json({ success: true, data: record });
    } catch (error) {
      // Send an error response if something went wrong
      console.error('Error creating user:', error);
      res.status(500).json({ success: false, error: 'Failed to create user' });
    }
  } else {
    // If the request method is not POST, send a method not allowed error
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
