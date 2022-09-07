const { Op } = require('sequelize');

const { User } = require('../../database/models');

const getAllUser = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 200, data: users };
};

const findByIdRole = async (email, role) => {
const { id } = await User.findOne({
  where: { [Op.and]: [{ email }, { role }] },
});
  return { id };
};

const deleteUser = async (id, role) => {
  const data = { status: 404, message: 'Not authorized' };
  if (role !== 'administrator') throw data;

  const user = await User.findOne({ where: { id } });
  await user.destroy();
  return { data: { status: 204 } };
};

module.exports = {
  getAllUser,
  findByIdRole,
  deleteUser,
};
