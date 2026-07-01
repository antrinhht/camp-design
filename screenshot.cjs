const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  
  // Set viewport large enough so the app doesn't scale down
  await page.setViewport({ width: 1200, height: 1200, deviceScaleFactor: 2 });
  
  console.log("Navigating to localhost:5173...");
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  
  // Wait for the app to load
  await page.waitForSelector('#screenshot-area');
  
  // Click the Pixel theme button
  console.log("Selecting Pixel theme...");
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const pixelBtn = buttons.find(b => b.textContent.includes('Pixel Art'));
    if (pixelBtn) pixelBtn.click();
  });
  
  // Wait a bit for theme to apply
  await new Promise(r => setTimeout(r, 500));
  
  const pagesToCapture = ['Thời Gian', 'Lịch Trình', 'Hành Trang', 'Nội Quy'];
  const artifactDir = 'C:/Users/Trinh/.gemini/antigravity/brain/45a9274f-42c1-49ff-8775-4bca98741275';
  
  for (const pageName of pagesToCapture) {
    console.log(`Capturing ${pageName}...`);
    // Click the navigation button
    await page.evaluate((name) => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const navBtn = buttons.find(b => b.textContent.includes(name));
      if (navBtn) navBtn.click();
    }, pageName);
    
    // Wait for render
    await new Promise(r => setTimeout(r, 500));
    
    const element = await page.$('#screenshot-area');
    const safeName = pageName.replace(/ /g, '_');
    const savePath = path.join(artifactDir, `pixel_${safeName}.png`);
    
    await element.screenshot({ path: savePath });
    console.log(`Saved to ${savePath}`);
  }
  
  await browser.close();
  console.log("Done!");
})();
