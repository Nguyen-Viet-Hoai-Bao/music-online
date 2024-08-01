import {Router} from 'express';
import { list, createGet, deleteGet, updatePost, detail, createPost, deletePost, updateGet, validateAndFetchPlaylist } from '../controllers/Playlist.controller';
import { uploadAvatar } from './middlewares/multer.config'

const router = Router();

router.get('/', list);

router.get('/create', createGet);
router.post('/create', uploadAvatar, createPost);

router.get('/delete/:id', validateAndFetchPlaylist, deleteGet);
router.post('/delete/:id', deletePost);

router.get('/update/:id', validateAndFetchPlaylist, updateGet);
router.post('/update/:id', uploadAvatar, updatePost);

router.get('/:id', validateAndFetchPlaylist, detail);

export default router;