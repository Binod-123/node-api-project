const express = require('express');
const app = express();
const db = require('./config');
const user=require('./cont/user');
const port = process.env.PORT || 4506;

// app.get("/", (req, res) =>{
//     res.send("hello world!");
// });
//  const start = async () =>{
//     try {
//         app.listen(port,() =>{
//             console.log(`${port} Yes i am connected`);
//         });
//  } catch (e) {
//     console.log(e);
//  }
// };
// start();
app.post('/register', (req, res) => {
    res.send('Welcome to my world');
});
app.listen(port);