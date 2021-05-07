import Product from '../models/Product'

export const createProduct = async (req, res) => {
    console.log(req.body)
    /* Deconstruir el objeto del req */
    const {name, set, price, category, size, stock, description, imgUrl} = req.body
    /* Definir el nuevo producto */
    const newProduct = new Product({
        name,
        set,
        price,
        category,
        size,
        stock,
        description,
        imgUrl
    })

    const productSaved = await newProduct.save()

    res.status(201).json(productSaved)
}

export const getProducts = async (req, res) => {
    const products = await Product.find()

    res.status(200).json(products)
}

export const getProductsByName = async (req, res) => {
    const products = await Product.find().sort({name: 1})

    res.status(200).json(products)
}

export const getProductsBySet = async (req, res) => {
    const products = await Product.find().sort({set: 1})

    res.status(200).json(products)
}

export const getProductsByPrice = async (req, res) => {
    const products = await Product.find().sort({price: 1})

    res.status(200).json(products)
}

export const getProductsByCategory = async (req, res) => {
    const products = await Product.find().sort({category: 1})

    res.status(200).json(products)
}

export const getProductsBySize = async (req, res) => {
    const products = await Product.find().sort({size: 1})

    res.status(200).json(products)
}

export const getProductsByStock = async (req, res) => {
    const products = await Product.find().sort({stock: 1})

    res.status(200).json(products)
}

export const getProductsByCreatedAt = async (req, res) => {
    const products = await Product.find().sort({createdAt: -1})

    res.status(200).json(products)
}

export const getProductsByUpdatedAt = async (req, res) => {
    const products = await Product.find().sort({updatedAt: -1})

    res.status(200).json(products)
}

export const getProductById = async (req, res) => {
    console.log(req.params)
    console.log(req.params.productId)
    try {
        const product = await Product.findById(req.params.productId)
        console.log(product)
        if (product !== null){
            res.status(200).json(product)
        } else {
            res.status(200).json({error: "El producto no existe"})
        }

    } catch (error) {
        res.status(400).json(error)
    }
}

export const updateProduct = async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {new: true})
        console.log(updateProduct)
        if (updateProduct !== null){
            res.status(200).json(updateProduct)
        } else {
            res.status(200).json({error: "El producto no existe"})
        }

    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const productDeleted = await Product.findByIdAndDelete(req.params.productId)
        console.log(productDeleted)
        if (productDeleted !== null){
            res.status(200).json({msg: "Producto Borrado"})
        } else {
            res.status(200).json({error: "El producto no existe"})
        }

    } catch (error) {
        res.status(400).json(error)
    }
}