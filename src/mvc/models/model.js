const users = []

const getUsers = () => {
    return users
}

const addUsers = (user) => {
    let id = users.length > 0 ? (Math.max(...users.map(user => user.id)) + 1) : 1
    let newUser = { id, ...user }
    users.push(newUser)
    return newUser
}

const checkUser = (details) => {
    console.log(details)
    // console.log(email, password)
    return users.find(user => user.email === details.email && user.newPassword === details.newPassword) || null
}
module.exports = { getUsers, addUsers, checkUser }