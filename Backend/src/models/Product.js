import {Schema, model} from 'mongoose'

const productSchema = new Schema({
    name: String,
    set: String,
    price: Number,
    category: String,
    size: String,
    stock: Number,
    description: String,
    imgUrl: String, 
},{
    timestamps: true,
    versionKey: false
})

export default model('Product', productSchema)