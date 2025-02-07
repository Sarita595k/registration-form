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

const checkUser = (email, newPassword) => {
    console.log(users)
    // console.log(email, password)
    return users.find(user => user.email === email && user.newPassword === newPassword) || null
}
module.exports = { getUsers, addUsers, checkUser }