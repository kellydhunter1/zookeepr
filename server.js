const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
// const { animals } = require('./data/animals');
// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const PORT = process.env.PORT || 3001;
// const app = express();
// // parse incoming string or array data
// app.use(express.urlencoded({ extended: true }));
// // parse incoming JSON data
// app.use(express.json());
// // creates default routes
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);
// // creates a route for the js and css files
// app.use(express.static('public'));

// //End of page to chain onto the server
// app.listen(PORT, () => {
//     console.log(`API server now on port ${PORT}!`);
//   });
