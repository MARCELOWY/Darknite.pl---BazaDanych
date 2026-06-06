const fs = require('fs');

const files = fs.readdirSync('./Gry')
    .filter(file => file.endsWith('.json'));

fs.writeFileSync(
    './Gry/index.json',
    JSON.stringify(files, null, 2)
);

console.log('index.json wygenerowany');