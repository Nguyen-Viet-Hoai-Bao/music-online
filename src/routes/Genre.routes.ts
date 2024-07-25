import { Router } from 'express';
import { GenreController } from '../controllers/Genre.controller';

const router = Router();
const genreController = new GenreController();

router.get('/', genreController.getAllGenres);
router.get('/:id', genreController.getGenreById);
router.post('/', genreController.createGenre);
router.put('/:id', genreController.updateGenre);
router.delete('/:id', genreController.deleteGenre);

export default router;
