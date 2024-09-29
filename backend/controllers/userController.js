const User = require('../models/User');
const Address = require('../models/Address');

exports.createUserWithAddress = async (req, res) => {
  const { name, street, city } = req.body;

  try {
    const user = await User.create({ name });
    const address = await Address.create({
      street,
      city,
      UserId: user.id,
    });

    res.status(201).json({ message: 'User and Address saved!', user, address });
  } catch (error) {
    res.status(500).json({ message: 'Error saving data', error });
  }
};
