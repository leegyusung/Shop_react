const express = require('express');
const productCtrl = require('./productCtrl');
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");
const multer = require('multer');
const path = require('path');


const product = express.Router();


const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fieldSize: 5 * 253 * 250 },
});

product.get('/', productCtrl.list);
product.get('/:productId', productCtrl.getProduct)
product.post('/register', productCtrl.register)
product.post('/registerFile', upload.single("img"), productCtrl.registerFile)



module.exports = product