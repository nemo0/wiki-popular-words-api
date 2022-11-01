import puppeteer from 'puppeteer';
import fs from 'fs';

export const wordScraper = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  try {
    await page.goto(
      'https://en.wikipedia.org/wiki/Most_common_words_in_English'
    );

    const tableSelector = 'table.wikitable.sortable.jquery-tablesorter';

    await page.waitForSelector(tableSelector);

    const items = await page.evaluate((tableSelector) => {
      const items = document.querySelectorAll(tableSelector + ' tbody tr');
      const data = [];
      items.forEach((item) => {
        const word = item.querySelector('td:nth-child(1)').innerText;
        const pos = item.querySelector('td:nth-child(2)').innerText;
        const oecRank = item.querySelector('td:nth-child(3)').innerText;
        const cocaRank = item.querySelector('td:nth-child(4)').innerText;
        const dolchLevel = item.querySelector('td:nth-child(5)').innerText;
        const polysemy = item.querySelector('td:nth-child(6)').innerText;
        data.push({ word, pos, oecRank, cocaRank, dolchLevel, polysemy });
      });
      return data;
    }, tableSelector);

    //    console.log(items);

    await browser.close();

    fs.writeFileSync(
      'words.json',
      JSON.stringify({
        lastUpdated: new Date().toISOString(),
        words: items,
      })
    );

    console.log('🔥 Scraping done for today.');
  } catch (error) {
    console.log(error);
  }
};
