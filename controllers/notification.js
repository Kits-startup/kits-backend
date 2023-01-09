import Notification from "../models/Notification.js";

export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json(notifications);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getNotificationByIndex = async (req, res) => {
  const { idx } = req.params;
  try {
    const notification = await Notification.find({ idx: idx });
    res.status(200).json(notification);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getNotificationById = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await Notification.findById(id);
    res.status(200).json(notification);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNotification = async (req, res) => {
  const notification = req.body;
  const newNotification = new Notification(notification);
  try {
    await newNotification.save();
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateNotification = async (req, res) => {
    const { id } = req.params;
    const notification = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No notification with id: ${id}`);
    const updatedNotification = await Notification.findByIdAndUpdate(
        id,
        { ...notification, id: id },
        { new: true }
    );
    res.json(updatedNotification);
};

export const deleteNotification = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No notification with id: ${id}`);
    await Notification.findByIdAndRemove(id);
    res.json({ message: "Notification deleted successfully." });
};
