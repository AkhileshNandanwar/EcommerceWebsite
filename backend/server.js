require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const authRoute = require('./routes/auth-router');
const blogRoute = require('./routes/blog-router');
const contactRoute = require('./routes/contact-router');
const connectDb = require('./config/db');
// const errorMiddleware = require('./middlewares/error-middleware');

app.use(express.json());
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));
// app.use(errorMiddleware);
app.use('/api/auth', authRoute);
app.use('/api/data', blogRoute);
app.use('/api/form', contactRoute);

const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`website is running at port: ${PORT}`);
    });
});
