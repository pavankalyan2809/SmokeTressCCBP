const express = require('express');
const { User, Address } = require('../models'); // Import Sequelize models

const router = express.Router();

// Get all users with their addresses
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({
      include: [Address], // Join addresses with users
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
