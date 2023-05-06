require('dotenv').config()

const express = require('express')

const cors = require('cors')

const { dbConection } = require('./database/config')

const app = express()
app.use(cors())
app.use(express.json())



//zona de rutas

app.use('/api/catSAT_Regimen',require('./routes/regimenfiscal.routes'))



dbConection()

app.listen( process.env.PORT | 3000, ()=> console.log(`Servidor en linea por el puerto ${ process.env.PORT }`))