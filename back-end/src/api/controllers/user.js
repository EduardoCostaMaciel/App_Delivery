const serviceUser = require('../services/user');

const getAllUser = async (_req, res) => {
  const { status, data } = await serviceUser.getAllUser();
  res.status(status).json(data);
};

const deleteUser = async (req, res) => {
  const { user: { role }, params: { id } } = req;
  const { data } = await serviceUser.deleteUser(id, role);
  if (data.message) {
    return res.status(data.status).json(data.message);
  }
  return res.status(data.status).end();
};

module.exports = {
  getAllUser,
  deleteUser,
};
