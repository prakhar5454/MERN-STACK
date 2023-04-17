const express = require('express');
const app = express();

//importing routers
const userRouter = require('./routers/userRouter');
const cors = require('cors');

app.use(cors({
    origin:['http://localhost:3000']
}))

//parse json data
app.use(express.json());

//adding routers
app.use('/user', userRouter);

const port =5000;

app.get('/', (req,res) => {
    res.send('Working perfectly');
});

app.get('/add', (req,res)=>{
    res.send('Add resopnse')
})

app.get('/getall', (req,res)=>{
    res.send('response from getall route')
})

app.listen( port, ()=> {console.log('server started');});
