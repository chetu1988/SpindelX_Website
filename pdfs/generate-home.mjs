import puppeteer from 'puppeteer';
import path from 'path';

(async () => {
  console.log('Launching browser to capture Full Home Page...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set viewport to a desktop size
  await page.setViewport({ width: 1440, height: 900 });

  // Emulate screen so that print CSS doesn't strip out background colors or styles
  await page.emulateMediaType('screen');

  const url = 'http://localhost:3000/';
  console.log(`Navigating to ${url}...`);
  
  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    
    // Auto-scroll function to trigger any "scroll animations" and lazy-loaded images
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 300;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight - window.innerHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });

    // Scroll back to top just in case
    await page.evaluate(() => window.scrollTo(0, 0));
    
    // Wait a couple of seconds for all final framer-motion animations to settle
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const pdfPath = path.join(process.cwd(), 'home-full-content.pdf');
    console.log(`Saving PDF to ${pdfPath}...`);
    
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' }
    });
    
    console.log(`Successfully saved home-full-content.pdf with ALL content loaded.`);
  } catch (err) {
    console.error(`Failed to generate PDF:`, err);
  }

  await browser.close();
  console.log('Done!');
})();
