const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1200, height: 1200, deviceScaleFactor: 2 });
  console.log("Navigating to localhost:5173...");
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await page.waitForSelector('#screenshot-area');
  
  const themes = [
    { name: 'Memphis', buttonText: 'Memphis' },
    { name: 'Liquid Glass', buttonText: 'Liquid Glass' },
    { name: 'Cyberpunk', buttonText: 'Cyberpunk' },
    { name: 'Minecraft', buttonText: 'Minecraft' },
    { name: 'Minecraft 2', buttonText: 'MC Hiện Đại' },
    { name: 'Roblox', buttonText: 'Roblox' }
  ];
  
  const pagesToCapture = ['Thời Gian', 'Lịch Trình', 'Hành Trang', 'Nội Quy'];
  const artifactDir = 'C:/Users/Trinh/.gemini/antigravity/brain/45a9274f-42c1-49ff-8775-4bca98741275';
  
  let totalErrors = 0;

  for (const theme of themes) {
    console.log(`\n--- Kiểm tra Theme: ${theme.name} ---`);
    await page.evaluate((btnText) => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const tBtn = buttons.find(b => b.textContent.includes(btnText));
      if (tBtn) tBtn.click();
    }, theme.buttonText);
    
    await new Promise(r => setTimeout(r, 500));
    
    for (const pageName of pagesToCapture) {
      // Click the navigation button
      await page.evaluate((name) => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const navBtn = buttons.find(b => b.textContent.includes(name));
        if (navBtn) navBtn.click();
      }, pageName);
      
      await new Promise(r => setTimeout(r, 500)); // wait for render
      
      // Check for overflow
      const overflowInfo = await page.evaluate(() => {
        // Find the main Layout container with h-[990px]
        const container = document.querySelector('.overflow-hidden');
        if (!container) return { hasError: false, details: 'Container not found' };
        
        // Let's get the inner content. Typically the content might have a fixed height
        // But the best way is to check the scrollHeight of the inner children or the container itself.
        // Wait, if it has overflow-hidden, scrollHeight will be exactly the content size.
        // Check if any text-containing child is bleeding out of bounds
        const containerRect = container.getBoundingClientRect();
        const allElements = container.querySelectorAll('*');
        for (let el of allElements) {
           const rect = el.getBoundingClientRect();
           
           // Ignore decorative or absolute elements that don't contain text directly
           const style = window.getComputedStyle(el);
           const textContent = el.innerText || el.textContent || '';
           if (style.position === 'absolute' || textContent.trim() === '') {
              continue;
           }
           
           if (rect.bottom > containerRect.bottom + 5 && rect.height > 0) {
              return { hasError: true, details: `Child overflow! A <${el.tagName}> element with text '${textContent.substring(0,20)}' exceeds container bottom by ${Math.round(rect.bottom - containerRect.bottom)}px` };
           }
        }
        return { hasError: false, details: 'Fits perfectly' };
      });
      
      if (overflowInfo.hasError) {
        console.error(`[❌ ERROR] ${theme.name} - ${pageName}: ${overflowInfo.details}`);
        totalErrors++;
      } else {
        console.log(`[✅ OK] ${theme.name} - ${pageName}: ${overflowInfo.details}`);
      }
      
      // We take screenshots anyway for the final walkthrough
      const element = await page.$('#screenshot-area');
      const safeTheme = theme.name.replace(/ /g, '');
      const safeName = pageName.replace(/ /g, '_');
      const savePath = path.join(artifactDir, `${safeTheme}_${safeName}.png`);
      await element.screenshot({ path: savePath });
    }
  }
  
  await browser.close();
  console.log(`\n=== KẾT QUẢ: Hoàn thành với ${totalErrors} lỗi tràn viền ===`);
  if (totalErrors > 0) process.exit(1);
})();
