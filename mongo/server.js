const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB");
});

// Modelo de Usuario
const userSchema = new mongoose.Schema({
    nombre: String,
    contrasena: String
});

const User = mongoose.model('User', userSchema);

// Rutas
app.post('/users', async (req, res) => {
    const { nombre, contrasena } = req.body;
    const newUser = new User({ nombre, contrasena });
    try {
        await newUser.save();
        res.status(201).send('User created');
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
