const mongoose = require("mongoose");

const uploadsSchema = new mongoose.Schema({
    fieldname: { type: String },
    originalname: { type: String },
    encoding: { type: String },
    mimetype: { type: String },
    buffer: { type: Buffer },
    size: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model("documents", uploadsSchema);