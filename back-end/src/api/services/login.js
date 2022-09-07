const md5 = require('md5');
const { User } = require('../../database/models');
const createToken = require('../auth/jwtFunctions');

const checkUserIfExist = (user) => {
  const errMessage = { status: 404, message: 'Not found' };
  if (!user) throw errMessage;
};

const loginUser = async (passWord, email) => {
  const password = md5(passWord);

  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password'] }, // depois
    // attributes: { exclude: ['id', 'password'] }, // antes
  });

  console.log('user', user.role);

  checkUserIfExist(user);

  const token = createToken.create({ email, role: user.role });

  return { status: 200, token, user };
};

module.exports = {
  loginUser,
};
