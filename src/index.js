const express = require("express");
const cors = require("cors");
const app = express();
const { serverConfig } = require("./config");

const apiRoutes = require("./routes");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/api", apiRoutes);

app.listen(serverConfig.PORT, () => {
  console.log(`server is listening to the port ${serverConfig.PORT}`);
});
