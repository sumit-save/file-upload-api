const express = require("express");
const uploadsController = require("../controllers/uploadsController");

const router = new express.Router();

// Upload image on server and serve as a static url
router.post("/upload-for-static-url", async (req, res) => {
    await uploadsController.uploadForStaticUrl(req, res);
});

// Upload image in mongodb document
router.post("/upload-for-document", async (req, res) => {
    await uploadsController.uploadForDocument(req, res);
});

module.exports = router;