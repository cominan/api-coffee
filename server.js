// import express from 'express'
// import jwt from 'jsonwebtoken'
// import dotenv from 'dotenv'
// import cors from 'cors'

// dotenv.config()
// const app = express()
// app.use(express.json())

// app.use(cors()) // Use this after the variable declaration
// const PORT = process.env.PORT || 5000

// app.post('/login',(req,res) => {
//     const data = req.body
//     const accessToken = jwt.sign(data, process.env.ACESS_TOKEN, {expiresIn: '30s'})
//     res.json({ accessToken })
// })
// const book = [
//     {
//         id: 1,
//         name: 'Chien tranh va Hoa binh',
//         author: 'ABC'
//     },
//     {
//         id: 2,
//         name: 'Bo gia',
//         author: 'DEF'
//     },
// ]
// app.get('/books', (req,res) => {
//     res.json({status: 'Success', data: book})
// })
// app.listen(PORT, () => {
//     console.log(`success on PORT ${PORT}`);
//     console.log(process.env.ACESS_TOKEN);
// })
import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('Source.json')
const middlewares = jsonServer.defaults()
const PORT = process.env.PORT || 3000

server.use(middlewares)


server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    // Continue to JSON Server router
    next()
})

// Use default router
server.use(router)

server.listen(PORT, () => {
    console.log('json start on PORT', PORT);
})