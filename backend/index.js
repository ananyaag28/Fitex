const express = require('express')
const cookieParser = require("cookie-parser");
const cors = require('cors')
const authRouter = require('./routes/authRoutes');
const orderRouter = require('./routes/orderRoutes')

const consumerRouter = require('./routes/consumerRoutes')
const cookRouter = require('./routes/cookRoutes')

const PORT = process.env.PORT || 3001
const app = express()
app.use(express.json())
app.use(cookieParser());

// cors policy
app.use(
    cors({
      origin: ['http://localhost:3000'], // Your allowed origin
      credentials: true, // Allow cookies to be sent
    })
);


app.use('/auth', authRouter)
app.use('/order', orderRouter)
app.use('/consumer', consumerRouter)
app.use('/cook', cookRouter)

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`)
})