/**
 * ASSIGNMENT #2 - Write a function that takes a jwt as input and returns 
 * true if the jwt can be DECODED (not verified). Return false otherwise
 */

const jwt = require('jsonwebtoken')

// generating token - assignment 1
const zod = require('zod')

const jwtPassword = 'secret_key'

const emailSchema = zod.string().email()
const passwordSchema = zod.string().min(8).max(15)

function signJwt(username, password){
    const usernameResponse = emailSchema.safeParse(username)
    const passwordResponse = passwordSchema.safeParse(password)

    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }

    const signature = jwt.sign({
        username,
    },jwtPassword)

    return signature;
}

const ansToken = signJwt('pragnyaps1109@gmail.com','kjnckjvnvk')

console.log(ansToken)


//decoding - Assignment2
function decodeFunc(token) {
    const decoded = jwt.decode(token)

    if(decoded) return true;
    else return false
}

const ansDecode = decodeFunc(ansToken)
console.log(ansDecode)