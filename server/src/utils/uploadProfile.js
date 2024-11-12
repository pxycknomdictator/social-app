import multer, { diskStorage } from "multer";
import path from "path";

const storage = diskStorage({
  destination(req, file, cb) {
    cb(null, "public/image");
  },
  filename(req, file, cb) {
    const extension = path.extname(file.originalname);
    cb(null, `${Date.now()}${extension}`);
  },
});

export const uploadProfile = multer({ storage });
