import express from "express";
import router from "./routes/index.js"
import db from './config/db.js'




const app = express()

//Connect to Data Base
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error))

    //Define Port
const port = process.env.PORT || 4000

//Enable PUG
app.set('view engine', 'pug')

//Get current Year

app.use((req,res,next)=>{
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = "Agencia De Viajes"
    next()
})

//Add body parser to read form form
app.use(express.urlencoded({extended:true}))
//Define public folder
app.use(express.static('public'))

//Add Router
app.use('/',router)

app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})