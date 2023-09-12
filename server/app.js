const express = require('express');
const app = express();
const db = require('./config');
const User=require('./cont/user');
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
app.use(express.json());
app.post('/register', async(req, res) => {
    let user = new User(req.body);
let result = await user(user.save());
    res.send(result);
    //console.log(result);
});
app.listen(port);