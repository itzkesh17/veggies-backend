import express from 'express'

import { 
    deleteAdminOrders, 
    filterAdminOrders, 
    getAdminMetrics, 
    getAdminOrders 
} 
    from '../API Controller/adminController.js';

const adminRouter = express.Router();

adminRouter.get('/getAdminOrders', getAdminOrders);

adminRouter.delete('/deleteAdminOrders/:orderId', deleteAdminOrders);

adminRouter.get('/filterAdminOrders/:method', filterAdminOrders);

adminRouter.get('/adminStats', getAdminMetrics)

export default adminRouter;