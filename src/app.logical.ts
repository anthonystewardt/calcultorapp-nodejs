import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';
// import { yarg } from './config';


const { b: base, l: limit, s: show } = yarg;

let outputMessage = '';
// const base = 5;
const messageHeader = `
=============================
          Tabla del ${base}
=============================
`;


for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${Number(base) * i}\n`;
}

// add messageHeader to outputMessage
outputMessage = messageHeader + outputMessage;

if (show) console.log(outputMessage);


// create directory
const outputPath = 'outputs';

fs.mkdirSync(outputPath, { recursive: true });

console.log('File created!')

// create file
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
