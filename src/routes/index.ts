import { Router } from 'express';
import authorRoutes from './Author.routes';
import genreRoutes from './Genre.routes';

const router = Router();

router.use("/authors", authorRoutes);
router.use("/genres", genreRoutes);

export default router;
