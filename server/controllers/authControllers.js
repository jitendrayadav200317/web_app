import User from "../models/User.js";
// login Api
export const login = () => {};

// register Api
export const register = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    // check if user is already registered
    const user = await User.findOne({ email });
    console.log(user);

    if (user) {
      return res.status(404).json({
        massage: "User is already regiater plese login",
      });
    }
    const newUser = await User.create({ name, password, email });
    res.status(201).json({
      massage: "Succesfully registered",
    });
  } catch (error) {}
};
