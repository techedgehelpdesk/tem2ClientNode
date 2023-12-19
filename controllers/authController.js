const db = require("../models");

const Auth = db.auth;

// 1. Create Account
const register = async (req, res) => {
  let param = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    status: req.body.status,
    email: req.body.email,
    password: req.body.password,
    phone_number: req.body.phone_number,
    is_admin: req.body.is_admin,
    is_emp: req.body.is_emp,
  };
  const user = await Auth.create(param);
  res.status(200).send(user);
};

// 2. Get Profile Details


const getProfileDetails = async (req, res) => {
  let id = req.params.id;
  let users = await Auth.findOne({ where: { id: id } });
  res.status(200).send(users);
};

// 3. Update Profile Details

const UpdateProfileDetails = async (req, res) => {
  let id = req.params.id;
  const user = await Auth.update(req.body, { where: { id: id } });
  res.status(200).send(user);
};

// 4. Delete Account

const DeleteProfile = async (req, res) => {
  let id = req.params.id;
  const users = await Auth.destroy({ where: { id: id } });
  res.status(200).send(users);
};

module.exports = {
  addUser,
  getAllUsers,
  getSingleUser,
  UpdateUser,
  DeleteUser,
};
