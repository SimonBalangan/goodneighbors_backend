const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    // IM VERGLEICH ZU: const users = await pool.query("SELECT * FROM users;");
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const createUser = async (req, res) => {
  const { first_name, last_name, email, street, zip_code, age, borrowedProducts  } = req.body;
  try {
    const newUser = await User.create({ first_name, last_name, email, street, zip_code, age, borrowedProducts });
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, street, zip_code, age, borrowedProducts } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { first_name, last_name, email, street, zip_code, age, borrowedProducts },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).send(`The user ${deletedUser.name} has been deleted.`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getUserProducts = async (req, res) => {
  const {id} = req.params;
  try{
    const userProducts = await User.findById(id).populate('products');
    res.status(200).json(userProducts)
  }
  catch(err){
    console.log(err);
    res.status(500).send(err.message);
  }
}

module.exports = {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,getUserProducts
};
