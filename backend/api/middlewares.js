const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(403).send('로그인 필요');
    }
}


exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next();
    } else {
        const message = '로그인한 상태입니다';
        res.send(message);
    }
}

exports.jsonWebToken = (user) => {
    const token = jwt.sign(
        // 첫 번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣습니다.
        {
            _id: user._id,
            username: user.username,
        },
        process.env.JWT_SECRET, // 두번째 파라미터에서는 JWT암호를 넣습니다.
        {
            expiresIn: '7d', //7일 동안 유효함
        }
    )
    return token;
}