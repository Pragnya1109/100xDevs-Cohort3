// ASSIGNMENT #5 - Write an HTML file, that hits the backend server using `fetch` API

const express = require('express')
const app = express()
const PORT = 3000



app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`)
})