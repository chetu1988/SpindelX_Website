import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set viewport to a desktop size
  await page.setViewport({ width: 1440, height: 900 });

  const pages = [
    { route: '', name: 'home' },
    { route: 'about', name: 'about' },
    { route: 'quality', name: 'quality' },
    { route: 'gallery', name: 'gallery' },
    { route: 'contact', name: 'contact' }
  ];

  for (const p of pages) {
    const url = `http://localhost:3000/${p.route}`;
    console.log(`Navigating to ${url}...`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Some animations might take a moment to finish, so wait an extra second
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const pdfPath = path.join(process.cwd(), `${p.name}.pdf`);
      console.log(`Saving PDF to ${pdfPath}...`);
      
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '0', right: '0', bottom: '0', left: '0' }
      });
      
      console.log(`Successfully saved ${p.name}.pdf`);
    } catch (err) {
      console.error(`Failed to generate PDF for ${p.name}:`, err);
    }
  }

  await browser.close();
  console.log('Done!');
})();
