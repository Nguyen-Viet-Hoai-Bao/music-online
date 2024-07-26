import { Router } from 'express';
import authorRoutes from './Author.routes';
import genreRoutes from './Genre.routes';
import songRoutes from './Song.routes';
import { index } from '@src/controllers/index.controller';

const router = Router();

router.use("/authors", authorRoutes);
router.use("/genres", genreRoutes);
router.use("/musics", songRoutes);
router.use("/", index);

export default router;
