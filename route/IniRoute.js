const {Router} = require("express");
const {GetModel} = require("../controller/IniController");
const route = Router();
route.get("/",(req,res)=> {
    GetModel(req,res);
});
module.exports = route;