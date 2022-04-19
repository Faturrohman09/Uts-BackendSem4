const {GetModelPart} = require("../model/IniModel")
const GetModel = async(req,res) => {
    const data = await GetModelPart();
    res.json({ContohData: data});
};

module.exports = {GetModel}