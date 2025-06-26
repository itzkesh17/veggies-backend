import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectMongo from './Database Connection/mongoDBConnection.js'
import routes from './Routes/routes.js'
import orderRouter from './Routes/orderRoute.js'
import adminRouter from './Routes/adminRoutes.js'

dotenv.config()

const app = express()

app.use(cors(
    {
        origin: `http://localhost:5173`,
        methods: ['GET', 'POST', 'PATCH', 'DELETE']
    }
))

connectMongo();

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.use('/users', routes)
app.use('/orders', orderRouter)
app.use('/admin', adminRouter)

app.listen(process.env.PORT, () => {
    console.log(`this app is running on ${process.env.PORT} port!`);
})
