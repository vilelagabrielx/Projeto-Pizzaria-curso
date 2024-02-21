import multer from "multer";
import path from "path";
import crypto from "crypto";

const uploadToFolder = (folderName: string) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('../temp', folderName)); // substitua 'caminho/raiz' pelo diretório raiz onde as pastas serão criadas
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(6).readUIntLE(0, 6);
      cb(null, file.fieldname + '-' + Date.now() + uniqueSuffix+ path.extname(file.originalname));
    }
  });

  return multer({ storage: storage });
};

export { uploadToFolder };