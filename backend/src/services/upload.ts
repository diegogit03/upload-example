import multer from 'multer';
import path from 'path';
import { v4 } from 'uuid';

const mimeTypes = ['image/jpeg', 'image/png', 'image/gif'];

const storage = multer.diskStorage({
    destination (req, file, cb) {
        cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename (req, file, cb) {
        cb(null, `${v4()}-${file.originalname}`);
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 6e+6
    },
    fileFilter (req, file, cb) {
        if (mimeTypes.includes(file.mimetype)) {
            cb(null, true);
        }
        cb(null, false);
    }
});

export default upload;
