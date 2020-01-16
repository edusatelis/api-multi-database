const restful = require('node-restful');
const mongoose = restful.mongoose;

const OsSchema = new mongoose.Schema({
    employee: { type: String, require: true },
    requester: { type: String, require: true },
    text: {type: String, require: true},
    date: { type: Date, default: Date.now()}

})

module.exports = restful.model('ServiceOrder', OsSchema);