const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: 'string',
    email: 'string',
    password: 'string',
    mobile: 'string'
});
module.exports = mongoose.model('user',userSchema);