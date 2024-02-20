import multer from "multer";
import uploadConfig from '../../config/multer';
import { isAuthenticated } from "../auth/isAuthenticated";

function processFormData(req, res, next, bodyName, upload) {
  upload.single(bodyName)(req, res, err => {
    isAuthenticated(req, res, next);
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: err.message });
    }
    next();
  });
}

export const processFormDataProducts = (bodyName) => (req, res, next) => {
  const upload = multer(uploadConfig.upload("../temp/products"));
  processFormData(req, res, next, bodyName, upload);
}