const multer = require("multer");

// Disk storage for static url
const storageForStaticUrl = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop());
    },
});

// File filter for static url
const fileFilterForStaticUrl = (req, file, cb) => {
    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/jpg" && file.mimetype !== "image/png") {
        cb("File type should be jpeg/jpg/png", false);
    } else if (file.size > 3000000) {
        cb("File should be less than 3MB", false);
    } else {
        cb(null, true);
    }
};

module.exports.uploadForStaticUrl = multer({
    storage: storageForStaticUrl,
    fileFilter: fileFilterForStaticUrl,
}).single("image");


// Memory storage for document
const storageForDocument = multer.memoryStorage();

// File filter for document
const fileFilterForDocument = (req, file, cb) => {
    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/jpg" && file.mimetype !== "image/png") {
        cb("File type should be jpeg/jpg/png", false);
    } else if (file.size > 3000000) {
        cb("File should be less than 3MB", false);
    } else {
        cb(null, true);
    }
};

module.exports.uploadForDocument = multer({
    storage: storageForDocument,
    fileFilter: fileFilterForDocument
}).single("image");
