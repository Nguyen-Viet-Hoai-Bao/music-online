import { getAllSongs } from '@src/services/Song.service';
import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

export const index = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const songs = await getAllSongs();
    res.render('songs/index', { songs, title: 'List Songs' });
  } catch (error) {
      req.flash('error_msg', 'Failed to fetch songs');
      res.redirect('/error');
  }
});