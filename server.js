import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMW.js";

// grab ENV vars
dotenv.config();
// connect to db
connectDB();

// init server
const App = express();

// If in development mode, use morgan
// if (process.env.NODE_ENV === "development") {
//   App.use(morgan("dev"));
// }

// allows us to accept json data in body
App.use(express.json());

App.get("/", (req, res) => {
  res.send("Api is running...");
});

// routes
App.use("/products", productRoutes);
App.use("/user", userRoutes);
App.use("/orders", orderRoutes);

// paypal
App.get("/config/paypal", (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

// error middlware
App.use(notFound);

App.use(errorHandler);

const PORT = process.env.PORT || 8080;

App.listen(
  PORT,
  console.log(
    `Server running in "${process.env.NODE_ENV}" mode on port ${PORT}`
      .brightBlue.bold
  )
);
