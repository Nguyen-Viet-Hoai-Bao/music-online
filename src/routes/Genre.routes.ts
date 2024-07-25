import {Router} from 'express';
import { list, createGet, deleteGet, updatePost, detail, createPost, deletePost, updateGet, validateAndFetchGenre } from '../controllers/Genre.controller';

const router = Router();
router.get('/create', createGet);
router.post('/create', createPost);

router.get('/delete/:id', validateAndFetchGenre, deleteGet);
router.post('/delete/:id', deletePost);

router.get('/update/:id', validateAndFetchGenre, updateGet);
router.post('/update/:id', updatePost);

router.get('/', list);
router.get('/:id', validateAndFetchGenre, detail);

export default router;
