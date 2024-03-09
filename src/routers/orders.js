const express = require('express');
const router = express.Router();

const Order = require('../controllers/orderController');


router.post('/createOrder',Order.createOrder);
router.get('/retrieveAllOrders',Order.retrieveAllOrders);
router.get('/retrieveOneOrder/:orderID',Order.retrieveOneOrder);
router.delete('/deleteOrder/:orderID',Order.deleteOrder);


module.exports = router