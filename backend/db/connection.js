const mongoose = require('mongoose');

const uri = 'mongodb+srv://Nishu:Nishu123@cluster0.sidnj.mongodb.net/InstantGrocery?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
