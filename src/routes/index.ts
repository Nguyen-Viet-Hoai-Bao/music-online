import { Router } from 'express';
import authorRoutes from './Author.routes';
import genreRoutes from './Genre.routes';
import { index } from '@src/controllers/index.controller';

const router = Router();

router.use("/authors", authorRoutes);
router.use("/genres", genreRoutes);
router.use("/", index);

export default router;
