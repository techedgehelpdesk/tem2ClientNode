const express = require('express')
const cors = require('cors')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{cors: {origin: "*"}});

// socket handlers

const {all_keywords,product_by_keywords} = require('./socketHandlers/productSockets.js')(io)

// socket handlers

io.on('connection', (socket) => { 
    socket.on('all_keywords',all_keywords),
    socket.on('product_by_keywords',product_by_keywords)
});
// io.listen(5000);

var corsOptions = {
    origin: '*'
}


// middlewares
app.use(express.static("public"))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

// SETTING UP COMMON HELPER CLASS
// let CommonFunction = require('./helper/CommonHelper');
// global.Helpers = new CommonFunction();

// routers
const productRoute = require('./routes/productRouter.js');
const dashboardRoute = require('./routes/dashboardRouter.js');

app.use('/customer/products',productRoute)
app.use('/customer/dashboard',dashboardRoute)

// app.use('/admin/products',productRoute)
// app.use('/admin/user',userRoute)
// app.use('/admin/authenticate',auth)

// testing API 
app.get('/',(req,res)=> {
    console.log('Kaboom!')
    res.send('WELCOME TO TEM Client ')
})


// port
const PORT = process.env.port || 5000

// server

// app.listen(PORT,() => {
//     console.log('TEM CLIENT CONSOLE IS RUNNING in '+ PORT)
// })

server.listen(PORT);