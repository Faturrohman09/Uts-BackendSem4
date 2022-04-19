const {readFileSync} = require ("fs");
const GetModelPart = async() => {
    const data = await readFileSync("model/iniData.json", "utf-8");
    return JSON.parse(data)
}

module.exports = {GetModelPart};