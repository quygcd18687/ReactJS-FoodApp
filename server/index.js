require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')

const connectDB = async () => {

    try {
       await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@foodview.rwu8g.mongodb.net/FoodView?retryWrites=true&w=majority`, {
            // useCreateIndex: true,
            // useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DataBase connected!!!')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB();

const app = express();
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/post', postRouter)

const POST = 5000

app.listen(POST, () => console.log('Server started on post: ${POST}'))