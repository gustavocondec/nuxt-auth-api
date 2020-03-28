const expressJwt = require("express-jwt")
module.exports = jwt;

function jwt () {
    const secret = process.env.KEY_SECRET
    return expressJwt({ secret })
        .unless({
            path: [
                "/login",
                "/register",
                "/nosecreto"
            ]
        })
}
/*
async function isRevoked (req, payload, done) {
    const user =
    //const user
    if (!user) {
        return done(null, true);
    }
    done()
}*/