import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(express.json())

app.use(cors()) // Use this after the variable declaration
const PORT = process.env.PORT || 5000

app.post('/login',(req,res) => {
    const data = req.body
    const accessToken = jwt.sign(data, process.env.ACESS_TOKEN, {expiresIn: '30s'})
    res.json({ accessToken })
})
const book = [
    {
        id: 1,
        name: 'Chien tranh va Hoa binh',
        author: 'ABC'
    },
    {
        id: 2,
        name: 'Bo gia',
        author: 'DEF'
    },
]
app.get('/books', (req,res) => {
    res.json({status: 'Success', data: book})
})
app.listen(PORT, () => {
    console.log(`success on PORT ${PORT}`);
    console.log(process.env.ACESS_TOKEN);
})