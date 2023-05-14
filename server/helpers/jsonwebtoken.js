const jwt = require('jsonwebtoken')
const secretCode = process.env.SECRET_CODE || 'bebas'

const tokenGenerator = (data) => {
    const { id, username, email, image, role } = data
    return jwt.sign({
        id, username, email, image, role
    }, secretCode)
}

const tokenVerifier = (data) => {
    return jwt.verify(data, secretCode)
}

module.exports = {
    tokenGenerator, tokenVerifier
}