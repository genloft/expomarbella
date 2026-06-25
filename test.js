const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('PAGE ERROR LOG:', msg.text());
    }
  });
  page.on('pageerror', error => console.log('PAGE ERROR EXCEPTION:', error.message));

  console.log('Navigating to http://localhost:3000...');
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
    console.log('DOM loaded. Waiting 3 seconds for React hydration...');
    await new Promise(r => setTimeout(r, 3000));
    const content = await page.content();
    console.log('HTML length:', content.length);
    if (content.length < 1000) {
      console.log('HTML is very small! Content:', content);
    }
    
    // Check if body is empty
    const bodyInnerHtml = await page.evaluate(() => document.body.innerHTML);
    console.log('Body length:', bodyInnerHtml.length);
    if (bodyInnerHtml.length < 100) {
      console.log('Body HTML:', bodyInnerHtml);
    }
  } catch (e) {
    console.log('Navigation error:', e);
  }
  
  await browser.close();
})();
