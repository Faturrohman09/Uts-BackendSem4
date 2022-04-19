const express = require("express");
const App = express()
const cobaRouter = require("./route/IniRoute")

App.use("/backend", cobaRouter);
App.listen (3000,()=>{
  console.log("Server berhasil dijalankan");
});
