const express = require("express");
const { initUsersPassword } = require("./controllers/users.controller");
const { initializeApp, applicationDefault } = require("firebase-admin/app");
const admin = require("firebase-admin")
const serviceAccount = require("./config/pmt-app-275be-firebase-adminsdk-47ivi-fe360723d9.json");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: "pmt-app-275be",
});
//routes
const userRoutes = require("./routers/user.routes");
const qrQcRoutes = require("./routers/qrqc.routes");
const prodRoutes = require("./routers/prod.routes");
const absenticeRoute = require("./routers/absent.routes");
const uploadRoutes = require("./routers/upload.routes");
const objectifRoutes = require("./routers/objectif.routes");
const taskRoutes = require("./routers/task.routes");
const alertRoutes = require("./routers/alerts.routes");
app.use("/user", userRoutes);
app.use("/qrqc", qrQcRoutes);
app.use("/prod", prodRoutes);
app.use("/absent", absenticeRoute);
app.use("/upload", uploadRoutes);
app.use("/objectif", objectifRoutes);
app.use("/tasks", taskRoutes);
app.use("/alerts", alertRoutes);
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));
const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log("App is running..");
});
//initUsersPassword();
