/*
ASSIGNMENT #3 - Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it
*/
const express = require('express')
const app = express()
const PORT = 3000

let requests = 0;
function numOfRequests(req,res,next){
    requests++;
    
    next();
}

app.use(numOfRequests)

app.get('/',(req,res)=>{
    console.log(requests)
    res.send(`Total Requests - ${requests}`)
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})