const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(require('cookie-parser')());
app.use(express.json());

app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/challenges', require('./routes/challenges'));
app.use('/api/v1/solutions', require('./routes/solutions'));


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
