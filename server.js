const express = require('express');
const db = require('./config/connection');


//const routes = require('./routes');


const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extented: true}));
app.listen(express.json());
//app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

