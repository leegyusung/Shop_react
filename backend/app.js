const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const fs = require('fs');

const passportConfig = require('./passport');

const mongoose = require('mongoose');
const api = require('./api/index');

dotenv.config();
const app = express();
passportConfig();
const { PORT, MONGO_URI, COOKIE_SECRET } = process.env;


mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected MongoDB')
    })
    .catch((err) => {
        console.log(err)
    })

try {
    fs.readdirSync('uploads');
} catch (error) {
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser(COOKIE_SECRET));
const sessionOption = {
    resave: false,
    saveUninitialized: false,
    secret: COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
        //maxAge: 1000 * 60 * 60,
    },
};

app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());


app.use('/api', api);

const port = PORT || 4000;
app.listen(port, () => {
    console.log(`${port} 포트에서 사용중입니다`);
})