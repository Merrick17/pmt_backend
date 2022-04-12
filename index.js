const express = require("express");
const { initUsersPassword } = require("./controllers/users.controller");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
const userRoutes = require("./routers/user.routes");
const qrQcRoutes = require("./routers/qrqc.routes");
const prodRoutes = require("./routers/prod.routes");
const absenticeRoute = require("./routers/absent.routes");
app.use("/user", userRoutes);
app.use("/qrqc", qrQcRoutes);
app.use("/prod", prodRoutes);
app.use("/absent", absenticeRoute);
const port = process.env.PORT || 3500;

app.listen(port, () => {
  // initUsersPassword();
  console.log("App is running..");
});
