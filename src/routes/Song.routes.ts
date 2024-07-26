import { uploadMedia } from './middlewares/multer.config';
import { Router } from 'express';
import {createGet, createPost, deleteGet, deletePost, detail, list, updateGet, updatePost, validateAndFetchSong, } from '../controllers/Song.controller';

const router = Router();

router.get('/create', createGet);
router.post('/create', uploadMedia, createPost);

router.get('/:id/edit', validateAndFetchSong, updateGet);
router.post('/:id/edit', uploadMedia, updatePost);

router.get('/:id/delete', validateAndFetchSong, deleteGet);
router.post('/:id/delete', deletePost);

router.get('/', list);
router.get('/:id', validateAndFetchSong, detail);

export default router;
