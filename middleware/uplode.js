// const multer = require('multer');
// const multer = require('../resources/static/assets/uploads');


// const imageFilter = (req, file, cd) => {
//     if (file.mimetype.startsWith("image")) {
//         cd(null, true);
//     } else {
//         cd("กรุณาโหลดรูปภาพ", false);
//     }
// }

// let storage = multer.diskStorage({
//     destination: (req, file, cd) => {
//         cd(null, __basedir + "/resources/static/assets/uploads")
//     },
//     filename: (req, file, cd) => {
//         cd(null, `${Data.now()}-image-${file.originalname}`)
//     }
// })

// let uploadFile = multer({ storage: storage, fileFilter: imageFilter})

// module.exports = uploadFile