import { test, expect } from '@playwright/test';
import { readExcel } from '../src/ExcelHelper';
import path from 'path';

const filePath = path.join(__dirname, '../data/testData.xlsx')
const records = readExcel(filePath);

for (const record of records) {
    test(`Data Driven Testing Using CSV file in playwright 
        : ${record.skill2}`, async ({ page }) => {
        await page.goto('https:www.google.com/')
await page.getByLabel("Search", { exact :true}).fill(record.skill2);
await page.getByLabel("Search", { exact :true}).press('Enter');

    })
}
