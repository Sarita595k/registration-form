const { getUsers, addUsers, checkUser } = require('../models/model')
const getRegistrationFrom = (req, res) => {
    res.render('registration')
}

const getUsersList = (req, res) => {
    let data = getUsers()
    res.send(data)
}
// after registration add data to the users array
const postRegistration = (req, res) => {
    const { firstName, lastName, email, newPassword, file, age } = req.body
    const response = addUsers({ firstName, lastName, email, newPassword, file, age })
    // console.log(data)
    res.render('dashboard', { userIs: response })
}

// login credentials

const login = (req, res) => {
    res.render('login', { error: null })
}

const postLogin = (req, res) => {
    // let errors = []
    let { email, newPassword } = req.body
    const loginResponse = checkUser(email, newPassword)
    if (!loginResponse) {
        return res.render('login', { error: "invalid email and password" })
    }
    res.render('loginDashboard', { userIs: loginResponse })
}
module.exports = {
    getRegistrationFrom, getUsersList, postRegistration, login, postLogin
}