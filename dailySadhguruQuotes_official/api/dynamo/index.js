const { createTable, deleteTable } = require("./tableOperations");
const { readData } = require("./dataOperations");

async function callAll() {
  // /await createTable();
  //await deleteTable();
  let data = await readData(11111);
  console.log("Data is", data);
}

callAll();