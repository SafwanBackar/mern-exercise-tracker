const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')


const app = express()
const port = process.env.PORT || 5000

mongoose.connect(`mongodb+srv://${process.env.db_name}:${process.env.db_password}@cluster0.4fj86.mongodb.net/?retryWrites=true&w=majority`), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => {
    console.log('Database connected successfully')
})


app.use(cors())
app.use(express.json())
app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)




app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
})