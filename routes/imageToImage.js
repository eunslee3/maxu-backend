const express = require('express');
const router = express.Router();
const imageToImage = require('../controllers/imageToImage')

router.post("/", imageToImage.imageToImage);

module.exports = router