import User from "../models/User.js";
// login Api
export const login = async(req,res) => {
  try {
    
  } catch (error) {
    
  }
};

// register Api
export const register = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    // check if user is already registered
    const user = await User.findOne({ email });
    if (user) {
      return res.status(404).json({
        massage: "User is already regiater plese login",
      });
    }
    const newUser = await User.create({ name, password, email });
    res.status(201).json({
      massage: "Succesfully registered",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });

console.log(error);

  }
};
