const express = require("express");
const path = require("path");
const api = require("./routes/ApiRoutes");
const htmlroutes = require("./routes/HtmlRoutes");
const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/api', api)
app.use('/', htmlroutes)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
