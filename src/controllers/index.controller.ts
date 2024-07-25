import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

export const index = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const tracks = [
      { title: 'Track 1', artist: 'Artist 1', image: 'https://via.placeholder.com/150' },
      { title: 'Track 2', artist: 'Artist 2', image: 'https://via.placeholder.com/150' },
      { title: 'Track 3', artist: 'Artist 3', image: 'https://via.placeholder.com/150' }
  ];
  res.render('index', { tracks });
  });