const { google } = require("googleapis");

async function getAuthSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({
    version: "v4",
    auth: client,
  });

  const spreadsheetId = "1oZrt6P0iQnA5bJ0kb9XobwirsydGpidkm3YobZijPkQ";

  return {
    auth,
    client,
    googleSheets,
    spreadsheetId,
  };
}

async function getSheet() {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();
  const { data: { values } } = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "A3:H27",
  });
  return values;
};

async function postSheet(values) {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();
  await googleSheets.spreadsheets.values.update({
    auth,
    spreadsheetId,
    range: "A3:H27",
    valueInputOption: "USER_ENTERED",
    resource: {
      values,
    },
  });
};

module.exports = { getSheet, postSheet };