import Payment from "../models/Payment.js";

export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPaymentByIndex = async (req, res) => {
  const { idx } = req.params;
  try {
    const payment = await Payment.find({ idx: idx });
    res.status(200).json(payment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPaymentById = async (req, res) => {
  const { id } = req.params;
  try {
    const payment = await Payment.findById(id);
    res.status(200).json(payment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPayment = async (req, res) => {
  const payment = req.body;
  const newPayment = new Payment(payment);
  try {
    await newPayment.save();
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePayment = async (req, res) => {
  const { id } = req.params;
  const payment = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No payment with id: ${id}`);
  const updatedPayment = await Payment.findByIdAndUpdate(
    id,
    { ...payment, id: id },
    { new: true }
  );
  res.json(updatedPayment);
};

export const deletePayment = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No payment with id: ${id}`);
    await Payment.findByIdAndRemove(id);
    res.json({ message: "Payment deleted successfully." });
};

