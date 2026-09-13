import { readFileSync } from 'fs';

// Try dynamic import since pdf-parse might have issues with ESM
const pdfParseMod = await import('pdf-parse/lib/pdf-parse.js');
const pdfParse = pdfParseMod.default;

const buf = readFileSync('./SPINDELX_Customer_Capability_Deck_Updated.pdf');
const data = await pdfParse(buf);
console.log('Pages:', data.numpages);
console.log(data.text);
