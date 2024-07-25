import {Router} from 'express';
import { list, createGet, deleteGet, updatePost, detail, createPost, deletePost, updateGet, validateAndFetchAuthor } from '../controllers/Author.controller';
import { uploadAvatar } from './middlewares/multer.config'

const router = Router();

router.get('/', list);

router.get('/create', createGet);
router.post('/create', uploadAvatar, createPost);

router.get('/delete/:id', validateAndFetchAuthor, deleteGet);
router.post('/delete/:id', deletePost);

router.get('/update/:id', validateAndFetchAuthor, updateGet);
router.post('/update/:id', uploadAvatar, updatePost);

router.get('/:id', validateAndFetchAuthor, detail);

export default router;