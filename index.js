const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//importing routers
const laptopRouter = require('./routers/laptoprouter');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/lap',laptopRouter);

// Connect to MongoDB
const dbURI = 'mongodb+srv://vivek:vivek@cluster0.5imczkv.mongodb.net/'; // Replace with your MongoDB connection string
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error.message);
    });
