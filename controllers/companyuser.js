import CompanyUser from "../models/CompanyUser.js";

export const getCompanyUsers = async (req, res) => {
  try {
    const companyUsers = await CompanyUser.find();
    res.status(200).json(companyUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCompanyUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const companyUser = await CompanyUser.findById(id);
    res.status(200).json(companyUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCompanyUserByUserNumber = async (req, res) => {
  const { userNumber } = req.params;
  try {
    const companyUser = await CompanyUser.findOne
    ({ userNumber: userNumber });
    res.status(200).json(companyUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateCompanyUser = async (req, res) => {
  const { id } = req.params;
  const companyUser = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No companyUser with id: ${id}`);
  const updatedCompanyUser = await CompanyUser.findByIdAndUpdate(
    id,
    {
      ...companyUser,
      id: id,
    },
    { new: true }
  );
  res.json(updatedCompanyUser);
};

export const deleteCompanyUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No companyUser with id: ${id}`);
  await CompanyUser.findByIdAndRemove(id);
  res.json({ message: "CompanyUser deleted successfully." });
}