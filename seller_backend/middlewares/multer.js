import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'./uploads');  // Folder where files will be saved
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);  // Unique file name
  }
});

const upload = multer({ storage: storage });
// next()
// Middleware to parse JSON bodies
export default upload

