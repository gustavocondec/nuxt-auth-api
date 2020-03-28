const { Schema, model } = require("mongoose")
const bcrypt = require("bcryptjs")
/*
Todo en Mongoose comienza con un esquema. Cada esquema 
se asigna a una colección MongoDB y define la forma de 
los documentos dentro de esa colección.
*/
var userSchema = new Schema({
    email: String,
    password: String,
    nombre: String,
    apellido: String,
    edad: Number
})
/* 
Las instancias de Models son documentos . Los documentos tienen muchos de sus
 propios métodos de instancia incorporados . También podemos definir nuestros 
 propios métodos de instancia de documentos personalizados.
*/
//solo funcionan el documentos
userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = bcrypt.hash(password, salt)
    return hash
}
userSchema.methods.matchPassword = async function (password) {//tipo function para acceder al this
    return await bcrypt.compare(password, this.password)
}
/*
Para usar nuestra definición de esquema, necesitamos 
convertir nuestra userSchema en un Modelo con el que 
podamos trabajar. Para hacerlo, lo pasamos a mongoose.model(modelName, schema)
*/
/*
Los modelos son constructores elegantes compilados a partir de Schemadefiniciones. 
Una instancia de un modelo se llama documento . Los modelos son responsables 
de crear y leer documentos de la base de datos subyacente de MongoDB.
*/
//con el modelo se pueden hacer busquedas, etc
const User = model("User", userSchema)//se creo el modelo User

//userDocument puede usara los mehods definidos
//un documento hace referencia a un documento de la bd, puede guardarse, editarse ,etc
const userDocument = new User({ email: "correo@gmail.com", nombre: "gustavo" })//una instancia de model es un documento

module.exports = User