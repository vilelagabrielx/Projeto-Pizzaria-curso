import multer from "multer";
import path from "path";

const uploadToFolder = (folderName: string) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('../temp', folderName)); // substitua 'caminho/raiz' pelo diretório raiz onde as pastas serão criadas
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

  return multer({ storage: storage });
};

export { uploadToFolder };