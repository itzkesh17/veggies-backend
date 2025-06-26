import express from 'express';
import { 
    createOrder, 
    getAllOrders
} from '../API Controller/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/createOrder', createOrder);

orderRouter.get('/getAllOrders', getAllOrders);

export default orderRouter;