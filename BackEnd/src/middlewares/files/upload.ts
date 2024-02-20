import multer from "multer";
import uploadConfig from '../../config/multer';
import { isAuthenticated } from "../auth/isAuthenticated";

const upload = multer(uploadConfig.upload("../temp"));

function processFormData(req, res, next,bodyName) {
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

export const processFormDataBanner = (bodyName) => (req, res, next) => {
  processFormData(req, res, next, bodyName);
}