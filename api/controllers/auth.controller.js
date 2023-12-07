import User from "../models/user.model.js"; //add .js
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body; //viewed using insomnia
  const hashedPassword = bcryptjs.hashSync(password,10);
  const newUser = new User({ username, email, password: hashedPassword }); //should match schemas of database
  // username: username ..... 
  try {
    await newUser.save();
    res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    // res.status(500).json(error.message)
    next(error);
    // next(errorHandler(300, "Something went wrong")); CUSTOM ERROR
  }
};
