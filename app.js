const express = require("express");
const app = express();
const router = require("./routes")
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)

app.listen(PORT, () => console.log(`Listening to ${PORT}`));
