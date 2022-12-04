import PersonalUser from "../models/PersonalUser.js";

export const getPersonalUsers = async (req, res) => {
  try {
    const personalUsers = await PersonalUser.find();
    res.status(200).json(personalUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPersonalUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const personalUser = await PersonalUser.findById(id);
    res.status(200).json(personalUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPersonalUserByUserNumber = async (req, res) => {
  const { userNumber } = req.params;
  try {
    const personalUser = await PersonalUser.findOne({ userNumber: userNumber });
    res.status(200).json(personalUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPersonalUser = async (req, res) => {
  const personalUser = req.body;
  const newPersonalUser = new PersonalUser(personalUser);
  try {
    await newPersonalUser.save();
    res.status(201).json(newPersonalUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}; // To be deleted after auth implementation

export const updatePersonalUser = async (req, res) => {
  const { id } = req.params;
  const personalUser = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No personalUser with id: ${id}`);
  const updatedPersonalUser = await PersonalUser.findByIdAndUpdate(
    id,
    {
      ...personalUser,
      id: id,
    },
    { new: true }
  );
  res.json(updatedPersonalUser);
};

export const deletePersonalUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No personalUser with id: ${id}`);
    await PersonalUser.findByIdAndRemove(id);
    res.json({ message: "PersonalUser deleted successfully." });
};
// Not needed; will be deleted after auth implementation