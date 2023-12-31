const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
dotenv.config();


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connected...'))
    .catch((err) => { console.log(err) })

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(4000, err => {
    if (!err) {
        console.log('App is listening...');
    }
    else {
        console.log('App crashed');
    }
})