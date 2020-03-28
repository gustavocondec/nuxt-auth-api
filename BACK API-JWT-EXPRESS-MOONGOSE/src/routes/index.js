const express = require("express")
const router = express.Router();

const user = require("../controllers/user")
//las rutas de nuestro aplicacion web
module.exports = app => {
    //user
    router.post("/login", user.login)
    router.post("/register", user.register)
    router.get("/perfil", user.perfil)
    router.get("/secreto", user.secreto)







    app.use(router) //
}