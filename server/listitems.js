const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new mongoose.Schema({
    title: String,
    link: String,
    datestring: String
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item