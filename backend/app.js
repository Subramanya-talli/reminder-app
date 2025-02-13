const dotEnv = require("dotenv");
const express = require("express");
const app = express();
const ConnectToDataBase = require("./connection");
const routes = require("./routes/routes")
const userRoutes = require("./routes/userRoute")
const cors = require("cors")
const welcomeMail = require("../backend/controllers/firstMail")


dotEnv.config();
const Port = process.env.port;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.get("/", (req, res) => {
  res.send("Hello from the App");
});

app.use('/reminders' , routes);
app.use('/user' , userRoutes);

app.listen(Port, () => {
  console.log(`App is running in Port ${Port}`);
});

// Connect to mongoDB
ConnectToDataBase(process.env.URL)
  .then(() => {
    console.log("Database is Connected");
  })
  .catch((error) => {
    console.log(error);
  });


  // app.use(welcomeMail)
