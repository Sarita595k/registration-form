const express = require('express')
const path = require('path')
const ejs = require('ejs')
const expressValidator = require('express-validator')
const { getRegistrationFrom, getUsersList, postRegistration, login, postLogin } = require('./src/mvc/controllers/controller')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'mvc', 'views', 'pages'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'src', 'public')))

// registration route
app.get('/', getRegistrationFrom)
app.post('/registration', postRegistration)

// login route
app.get('/login', login)
app.post('/login', postLogin)

// userlist route 
app.get('/usersList', getUsersList)


app.listen(3000, () => {
    console.log('server is running')
})