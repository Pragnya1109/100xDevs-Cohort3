// ASSIGNMENT #2 - Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.use(express.json())
app.use(middlewareFun)

const PORT = 3000

const newFile = path.join(__dirname,'log.txt')
if(!fs.existsSync(newFile)) fs.writeFile(newFile,'** LOGGING STARTS **\n',function (err){
    if(err) {
        console.log('Error in creating file !!')
        return;
    }
    console.log('File created successfully !!')
})


function middlewareFun(req,res,next){
    
    const logData = `Time - ${new Date()} : Method - ${req.method} , URL - ${req.url}\n`

    fs.appendFile(newFile,logData,(err)=>{
        if (err) {
            console.error('Error in writing to log file:', err);
            return;
        }
        console.log('Logged successfully !!')
    })

    console.log(req.method)
    console.log(req.url)
    console.log(new Date())
    next()
}


app.post('/',(req,res)=>{
    res.send('Hello app.POST()')
})
app.get('/',(req,res)=>{
    res.send('Hello app.get()')
})
app.put('/',(req,res)=>{
    res.send('Hello app.put()')
})
app.delete('/',(req,res)=>{
    res.send('Hello app.delete()')
})

app.listen(PORT, (req,res)=>{
    console.log(`Server is listening on PORT ${PORT}`)
})