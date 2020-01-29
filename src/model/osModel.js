const restful = require('node-restful');
const mongoose = restful.mongoose;

const OsSchema = new mongoose.Schema({
    ide: { type: Number},
    idr: { type: Number },
    employee: { type: String, require: true },
    requester: { type: String, require: true },
    text: {type: String, require: true},
    date: { type: String},
    finalDate: { type: String},
    realized: {type: Boolean, default: false}

})

module.exports = restful.model('ServiceOrder', OsSchema);