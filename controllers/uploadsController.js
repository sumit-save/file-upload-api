const uploadsModel = require("../models/uploadsModel");
const uploadsMiddleware = require("../middleware/uploadsMiddleware");

module.exports.uploadForStaticUrl = async (req, res) => {
    try {
        uploadsMiddleware.uploadForStaticUrl(req, res, async function (err) {
            if (err) {
                return res.status(400).json({ message: err });
            } else {
                const staticUrl = `http://localhost:3000/${req.file.filename}`;
                return res.status(200).json({ url: staticUrl });
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
};

module.exports.uploadForDocument = async (req, res) => {
    try {
        uploadsMiddleware.uploadForDocument(req, res, async function(err) {
            if (err) {
                return res.status(400).json({ message: err });
            } else {
                const newDocument = new uploadsModel({
                    fieldname: req.file.fieldname,
                    originalname: req.file.originalname,
                    encoding: req.file.encoding,
                    mimetype: req.file.mimetype,
                    buffer: req.file.buffer,
                    size: req.file.size
                });
                const savedDocument = await newDocument.save();
                return res.status(200).json({ data: savedDocument });
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
};