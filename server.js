const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const projet = require('./models/projet');
const Customers = require('./models/customers');
const port = 5000;

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/admin',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.get('/api/customers', (req, res, next) => {
  Customers.find()
      .then(customers => res.status(200).json(customers))
      .catch(error => res.status(400).json({ error }));
});

app.delete('/api/customers/:_id', (req, res, next) => {
  Customers.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
});

app.use("/",
    ()=> console.log("ok mon pote")
);

app.listen(port, () => `Server running on port ${port}`);