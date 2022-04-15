const express = require("express");
const { Router } = require("express");
require("dotenv").config();

const app = express();
const router = Router();
app.use(router);

router.get("/", async (req, res) => {
  return res.status(200).send({ status: "healthy" });
});

app.listen(process.env.APP_PORT, () => {
  console.log(`PROCESS ${process.pid}: Running on PORT : ${process.env.APP_PORT}`);
});
