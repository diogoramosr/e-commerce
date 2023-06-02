import multer from "multer";
import path, { dirname } from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, callBack) => {
      const extesion = path.extname(file.originalname);
      const name = path.basename(file.originalname, extesion);

      callBack(null, `${name}-${Date.now()}${extesion}`);
    },
  }),
};
