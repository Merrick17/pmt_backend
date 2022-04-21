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
const uploadRoutes = require("./routers/upload.routes");
const objectifRoutes = require("./routers/objectif.routes");
const taskRoutes = require("./routers/task.routes");
app.use("/user", userRoutes);
app.use("/qrqc", qrQcRoutes);
app.use("/prod", prodRoutes);
app.use("/absent", absenticeRoute);
app.use("/upload", uploadRoutes);
app.use("/objectif", objectifRoutes);
app.use("/tasks", taskRoutes);
const port = process.env.PORT || 3500;

app.listen(port, () => {
  // initUsersPassword();
  console.log("App is running..");
});
