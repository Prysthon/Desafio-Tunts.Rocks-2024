const { getSheet, postSheet } = require("./spreadsheet");
const { calculateSituation } = require("./student");

async function challenge() {
  const data = await getSheet();
  const result = calculateSituation(data);
  postSheet(result);
}

challenge();