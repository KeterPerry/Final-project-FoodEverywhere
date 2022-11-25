import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
    console.log(req.body);
    // console.log(file);
    // console.log(file.originalname);
  },
});

const upload = multer({ storage: storage });

export { upload };
