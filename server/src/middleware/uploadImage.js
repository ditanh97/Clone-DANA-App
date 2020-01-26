const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file, 'file')
    cb(null, './public/images/uploads');
  },
  // destination: '../../public/images/uploads',
  filename: (req, file, cb) => {
    let filetype = "";
    if (file.mimetype === "image/png") {
      filetype = "png";
    }
    if (file.mimetype === "image/jpeg") {
      filetype = "jpg";
    }
    cb(null, "image-" + Date.now() + "." + filetype);
  }
});

exports.upload = multer({storage});