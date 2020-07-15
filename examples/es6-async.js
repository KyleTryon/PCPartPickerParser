const pcp3 = require("../dist")

async function returnParts() {
  let parts = await pcp3.getPartsList('test')
  console.log(parts)
}
returnParts()