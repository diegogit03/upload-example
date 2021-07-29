import { Router } from 'express';

import imageRoutes from './images';

const router = Router();

router.use('/images', imageRoutes)

export default router;
