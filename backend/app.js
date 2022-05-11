const express = require('express');
require('./db/connection.js');
const app = express();

const productRouter = require('./express-api/api/routes/productRouter');
const cartRouter = require('./express-api/api/routes/cartRouter');

app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.listen(3000, () => {
    console.log('listning on port 3000');
});
