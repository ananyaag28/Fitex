const express = require('express')
const cookieParser = require("cookie-parser");
const cors = require('cors')
const authRouter = require('./routes/authRoutes');
const dealRouter = require('./routes/dealRoutes')
const sellerRouter = require('./routes/sellerRoutes')

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
app.use('/deal', dealRouter)
app.use('/seller', sellerRouter)

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`)
})