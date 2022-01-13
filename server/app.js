const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const apikey = process.env.APIKEY

console.log(apikey)


const routenum = process.env.PORT || 5000

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const dbURI = process.env.DBURI

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log('Database Online'))
.catch((err) => console.error(err))


app.get('/', (req,res) => {
    res.status(200).send("https://images7.alphacoders.com/865/865098.jpg")
})









app.listen(routenum, () => {
    console.log(`Server is now listening on port ${routenum}`)
})
