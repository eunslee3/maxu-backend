const express = require('express');
const router = express.Router();
import { imageToImage } from '../controllers/imageToImage';

router.post("/image-to-image", imageToImage(req, res) {

});