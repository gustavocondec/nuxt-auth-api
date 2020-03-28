//para poder leer .env en desarrollo
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}
//importamos el script database
require("./database")

const express = require("express");
const config = require("./server/config");
//le pasamos el app de express() y nos devuelve un app configurado
const app = config(express());

app.listen(app.get("port"), () => {
    console.log("servidor en : ", app.get("port"))
})