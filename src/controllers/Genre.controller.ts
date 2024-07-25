import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { createGenre, deleteGenre, getGenreById, getGenres, updateGenre } from '../services/Genre.service';

export async function validateAndFetchGenre(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        req.flash('error_msg', 'Invalid genre ID');
        return res.redirect('/error');
    }
    const genre = await getGenreById(id);
    if (genre === null) {
        req.flash('error_msg', 'Genre not found');
        return res.redirect('/error');
    }
    (req as any).genre = genre;
    next();
}

export const list = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const genres = await getGenres();
        res.render('genres/index', { genres, title: 'List Genre' });
    } catch (error) {
        req.flash('error_msg', 'Failed to fetch genres');
        res.redirect('/error'); 
    }
});

export const detail = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const genre = (req as any).genre;
        res.render('genres/detail', { genre, title: 'Genre Detail' });
    } catch (error) {
        req.flash('error_msg', 'Failed to fetch genre');
        res.redirect('/error');
    }
});

export const createGet = (req: Request, res: Response) => {
  res.render('genres/create', {
    title: 'Create Genre',
  });
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const genre = await createGenre({ name });
    res.redirect(`/genres/${genre.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating genre');
  }
};

export const updateGet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const genre = (req as any).genre;
    res.render('genres/update', {
      title: 'Update Genre',
      genre,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching genre');
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const genreId = parseInt(req.params.id, 10);
    const { name } = req.body;

    const genre = await updateGenre(genreId, { name });
    res.redirect(`/genres/${genre.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating genre');
  }
};

export const deleteGet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const genre = (req as any).genre;
    res.render('genres/delete', {
      title: 'Delete Genre',
      genre,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching genre');
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const genreId = parseInt(req.params.id, 10);
    await deleteGenre(genreId);
    res.redirect('/genres');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting genre');
  }
};
