const AirtablePlus = require('airtable-plus');

export async function getCms(baseId, apiKey) {
  const inst = new AirtablePlus({
    baseID: baseId,
    apiKey: apiKey,
    tableName: 'People',
  });

  const records = await inst.read({
    sort: [{
      field: 'Name', direction: 'asc'
    }]
  });

  return records.map((record) => {
    // We're going to make our keys all lowercase, for ease in
    return Object.fromEntries(
      Object.entries(record.fields).map(([k, v]) => [k.toLowerCase(), v])
    );
  })
}

export default async (req, res) => {
  res.send(await getCms(process.env.AIRTABLE_BASE_ID, process.env.AIRTABLE_API_KEY));
};