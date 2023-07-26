const express = require("express");
require("../src/db/conn")
const app = express();
const port = 3000;
const router = require("../src/routers/men")
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`Connection is live at ${port}`)
})