const express = require('express')
const cors = require('cors')

const app = express();

var corOptions = {
    origin: 'https://localhost:3001'
}


// middlewares
app.use(express.static("public"))
app.use(express.json())
app.use(cors(corOptions))
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
const PORT = process.env.port || 3000

// server

app.listen(PORT,() => {
    console.log('TEM CLIENT CONSOLE IS RUNNING in '+ PORT)
})