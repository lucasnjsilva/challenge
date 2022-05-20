const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'input.csv');
const file = fs.readFileSync(inputPath, { encoding: 'utf-8' }, (err) => console.log(err));

const splitRow = file.split("\n");

const headers = splitRow.shift().split(",");

const json = [];

splitRow.forEach((d) => {
    let tmp = {};
    let row = d.split(',');

    for(var index = 0; index < headers.length; index++){
        tmp[headers[index]] = row[index];
    }

    json.push(tmp);
});

json.sort((key, value) => key.id - value.id);

const outPath = path.join(__dirname, 'output.json');

const formatedJSON = JSON.stringify(json, null, 2).replace(/\\r/g, '');

fs.writeFileSync(outPath, formatedJSON, { encoding: 'utf-8' }, (err) => console.log(err));