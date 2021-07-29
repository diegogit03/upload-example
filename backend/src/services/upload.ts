import multer from 'multer';
import { extname } from 'path/posix';
import { v4 } from 'uuid';

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './../uploads');
    },
    filename(req, file, cb) {
        cb(null, v4() + extname(file.originalname));
    }
});

const upload = multer({ storage });

export default upload;
