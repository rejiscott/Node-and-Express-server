const express = require('express')
const app = express()

app.get("/", (req, res ) => {
    res.send("<h1>HELLO WORLD.</h1>")
})

app.get("/contact", (req, res) =>{
    res.send("Conact me at RejiCodes@gmail.com");
})

app.get("/about", (req, res) =>{
    res.send("I am a developer who had his start at Lambda, There they gave me my roots in the Languages, HTML, CSS, and Javascript. They also gave me some rope to grab in these javascript technologies: React, Redux, and Axios")
})
app.listen(3000, () => {
    console.log("server started on port 3000")
})//3000 is the port that the server is working on. nothing is currently active
