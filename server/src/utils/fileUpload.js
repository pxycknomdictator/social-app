import multer, { diskStorage } from "multer";
import path from "path";

const storage = diskStorage({
  destination(req, file, cb) {
    return cb(null, "public/temp");
  },
  filename(req, file, cb) {
    const extension = path.extname(file.originalname);
    return cb(null, `${Date.now()}${extension}`);
  },
});

export const upload = multer({ storage });
