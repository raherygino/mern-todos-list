const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();
const Todo = require('./models/todo');

// Connect to the database
mongoose
  .connect('mongodb://127.0.0.1:27017/tododb', { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use(bodyParser.json());

router.get('/todos', (req, res, next) => {
    // This will return all the data, exposing only the id and action field to the client
    Todo.find({}, 'action')
      .then((data) => res.json(data))
      .catch(next);
});

router.post('/todos', (req, res, next) => {
  var isValidate = true;
  const allField = Object.keys(req.body);

  for (var i = 0; i < allField.length; i++) {
      if(!req.body[allField[i]]) {
        isValidate = false;
      }
  }

  if (isValidate) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "Field require"
    })
  }
});

router.delete('/todos/:id', (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch(next);
});

app.use('/api', router);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});