import { Router } from 'express';

import ImageController from '@controllers/ImageController';
import upload from '@services/upload';

const router = Router();
const controller = new ImageController();

router.get('/', controller.index);
router.post('/', upload.single('image'), controller.store);

export default router;
