const UserModel = require('../models/UserModel')

exports.getAllUser = (req, res) => {
    const userList = UserModel.findAll()

    res.render('users')
}