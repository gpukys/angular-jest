const fs = require('fs');

const path = process.argv[2]
const rawData = fs.readFileSync(path);
try {
  const json = JSON.parse(rawData);
  console.log(`${json.total.lines.pct} lines, ${json.total.statements.pct} statements, ${json.total.functions.pct} functions, ${json.total.branches.pct} branches`)
} catch (e) {
  console.error('Error parsing data', e)
}