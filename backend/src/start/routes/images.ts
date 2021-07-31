import { Router } from 'express';

import ImageController from '@controllers/ImageController';
import upload from '@services/upload';
import imageValidation from '@validations/image';

const router = Router();
const controller = new ImageController();

router.get('/', controller.index);
router.post('/', upload.single('image'), imageValidation, controller.store);
router.post('/:id', controller.show);

export default router;
