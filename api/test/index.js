const db = require('./db')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = (req, res) => {
    return res.status(200).json({ success: true, message: "Hey from test"})
}
