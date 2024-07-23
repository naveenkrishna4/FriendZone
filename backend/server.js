const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

// Routers
const authRouter = require("./Routes/auth");
const { userRouter } = require("./Routes/user");
const { postRouter } = require("./Routes/post");

//middelwares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//db
const mongoose = require("mongoose");
const db =
  "mongodb+srv://naveen:Naveen4@users.pgffupa.mongodb.net/?retryWrites=true&w=majority&appName=Users";

mongoose
  .connect(db)
  .then(() => {
    console.log("connected to database");

    const server = app.listen(PORT, () => {
      console.log("server has started on ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);

const { authVerify } = require("./Controllers/authController");
