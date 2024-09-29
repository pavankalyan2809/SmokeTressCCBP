const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // To handle CORS issues
app.use(bodyParser.json()); // To parse incoming request bodies in JSON format

// Initialize Sequelize and define models
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Path to the SQLite database file
});

// Define the User model
const User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Define the Address model
const Address = sequelize.define('Address', {
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Define the one-to-many relationship between User and Address
User.hasMany(Address);
Address.belongsTo(User);

// Sync database and create tables
sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tables created!');
});

// Routes

// Route to register a user and address
app.post('/api/register', async (req, res) => {
  const { name, street, city } = req.body;

  try {
    // Create a new user and address
    const user = await User.create({ name });
    const address = await Address.create({
      street,
      city,
      UserId: user.id // Associate the address with the user
    });

    res.status(201).json({ message: 'User and address registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Route to get all users and their addresses
app.get('/api/users', async (req, res) => {
  try {
    // Fetch all users and include their addresses
    const users = await User.findAll({
      include: [Address] // This will join the Address table with User
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
