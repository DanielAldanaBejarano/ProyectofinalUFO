import mongoose from 'mongoose'

const atlas = 'mongodb+srv://Dann:1010*@ufocollections.spsvi.mongodb.net/Products?retryWrites=true&w=majority'

mongoose.connect(atlas, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => {
        console.log('BD conectada')
    })
    .catch(err => {
        console.log('Error ===========>', err)
    })