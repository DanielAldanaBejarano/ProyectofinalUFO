import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import './database'

/* Importación de rutas */
import productRoutes from './routes/products.routes.js'
/* Importación de corse */
import cors from 'cors'

const app = express();
const port = 5000;

/* Usar Morgan */
app.use(morgan('dev'))
/* Solicitar que interprete archivos JSON */
app.use(express.json())
/* Usar corse */
app.use(cors())

//get devolver informacion
//post enviar informacion y crear un registro
//put actualizar informacion existente
//delete Elimine informacion

app.set('pkg', pkg)

app.get('/', (req, res) => {
    res.json({
        version: app.get('pkg').version,
        author: app.get('pkg').author,
        name: app.get('pkg').name
    })
})

/* Rutas */

app.use('/api', productRoutes)
/* localhost:5000/api/products/la-ruta-a-usar */


app.listen(port, () => {
    console.log('Servidor escuchando en el puerto', port)
})