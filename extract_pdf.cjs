const { PDFParse } = require('./node_modules/pdf-parse/dist/pdf-parse/cjs/index.cjs');
const fs = require('fs');

const filePath = './SPINDELX_Customer_Capability_Deck_Updated.pdf';

const parser = new PDFParse({ verbosity: 0 });
// Try passing URL directly
parser.getText(filePath).then(data => {
  console.log('Pages:', data.numpages);
  data.pages.forEach((p, i) => {
    console.log('\n=== PAGE ' + (i+1) + ' ===');
    console.log(p.text || '(no text)');
  });
}).catch(e => {
  console.error('getText error:', e.message);
});
