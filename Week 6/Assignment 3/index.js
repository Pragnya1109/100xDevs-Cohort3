/**
 * ASSIGNMENT #3 - Write a function that takes a jwt as input and returns
 * true if the jwt can be VERIFIED. Return false otherewise
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

//veriying - Assignment 3

function verifyJwt(token){
    try{
        const verified = jwt.verify(token, jwtPassword)

        return true
    }
    catch(error){
        return false;
    }
}

const ansVerify = verifyJwt(ansToken)

console.log(ansVerify)