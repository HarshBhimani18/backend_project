require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require("./routes/usersRoutes");
const ticketRoutes  = require("./routes/ticketRoutes")

const app = express();
app.use(express.json());

const dburl = process.env.MONGODB_URI;


mongoose.connect(dburl)
.then(() => console.log('Connected to MongoDB!'))
.catch(err => console.error('MongoDB connection error:', err));


app.use("/users", usersRoutes);
app.use("/ticket",ticketRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
