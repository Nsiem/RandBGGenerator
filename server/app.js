const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Items = require('./listitems')
const dotenv = require('dotenv')
const axios = require('axios')
dotenv.config()
const apikey = process.env.APIKEY


const routenum = process.env.PORT || 5000

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const dbURI = process.env.DBURI

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log('Database Online'))
.catch((err) => console.error(err))


function createitem(title, link, datestring) {
    const item = new Items
    item.title = title
    item.link = link
    item.datestring = datestring

    item.save().then().catch((err) => {
        console.log(err)
    })
}


app.get('/', (req,res) => {
    res.status(200).send("https://images7.alphacoders.com/865/865098.jpg")
})

app.get('/wallpaper/:query', (req,res) => {
    query = req.params.query
    query.split(' ').join('+')
    axios.get(`https://wall.alphacoders.com/api2.0/get.php?auth=${apikey}&method=search&term=${query}`).then((resp) => {
        total = resp.data['total_match']
        if (total == 0) {res.send("0"); return}
        if (total > 30) {
            selected = Math.floor(Math.random() * 30)
            wallpaper = resp.data['wallpapers'][selected]['url_image']
            let yourDate = new Date()
            createitem(req.params.query, wallpaper, yourDate.toISOString().split('T')[0])
            res.send(wallpaper)
        } else {
            selected = Math.floor(Math.random() * total)
            wallpaper = resp.data['wallpapers'][selected]['url_image']
            let yourDate = new Date()
            createitem(req.params.query, wallpaper, yourDate.toISOString().split('T')[0])
            res.send(wallpaper)
        }
    }).catch((err) => {
        console.log(err)
        res.send("0")
    })
})

app.get('/history', (req,res) => {
    Items.find({}).sort({_id: -1}).then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
        res.send("0")
    })
})

 





app.listen(routenum, () => {
    console.log(`Server is now listening on port ${routenum}`)
})
