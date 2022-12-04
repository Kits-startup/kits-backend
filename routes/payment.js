import express from 'express';
import {
    getPayments,
    getPaymentByIndex,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment,
} from '../controllers/payment.js';

const router = express.Router();

router.get('/', getPayments);
router.get('/index/:index', getPaymentByIndex);
router.get('/id/:id', getPaymentById);
router.post('/', createPayment);
router.patch('/:id', updatePayment);
router.delete('/:id', deletePayment);

export default router;