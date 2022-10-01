import User from "../models/Users";
import { getPagination } from "../libs/getPagination";

export const validateUser = async (req, res) => {
  const user = await User.find({
    user: req.params.user,
    password: req.params.password,
  });
  res.json(user);
};
export const createUser = async (req, res) => {
  const newUser = new User({
    user: req.body.user,
    password: req.body.password
  });
  const userSaved = await newUser.save();
  res.json(userSaved);
};
