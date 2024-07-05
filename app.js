const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const connectdb = require("./db");
const authRoutes = require("./routes/authRoute");
const cookieParser = require("cookie-parser");
const {requireAuth,checkUser} = require('./middleware/authMiddleware')

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

connectdb();

app.get('*', checkUser)
app.get("/", requireAuth, (req, res) => {
  res.render("home");
});
app.get("/smoothies", requireAuth ,(req, res) => {
  res.render("smoothies");
});
app.use(authRoutes);
app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
