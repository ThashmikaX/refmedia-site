import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/mongoDB'; // Adjust import path as necessary
import Album from '@/lib/models/album';

type AlbumData = {
  albumTitle: string;
  eventDate: string;
  albumDescription: string;
  facebookAlbumLink: string;
  imageLinks: string[];
  photographers: string[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectToDatabase(); // Establish database connection

    const albums: AlbumData[] = await Album.find({}); // Fetch albums
    res.status(200).json(albums); // Respond with albums data
  } catch (error) {
    console.error('Error fetching albums:', error); // Log error
    res.status(500).json({ message: 'Error fetching albums', error }); // Respond with error
  }
}
