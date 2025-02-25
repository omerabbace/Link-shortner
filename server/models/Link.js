const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true },
    dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Link', linkSchema);
