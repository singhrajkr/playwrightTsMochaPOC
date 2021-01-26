import { chromium, firefox, webkit } from "playwright";
import { expect } from "chai";
import "mocha";

describe("Sample test for browsers", async () => {
  it("Launch Chrome", async () => {
    const browser = await chromium.launch({ headless: false }); // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    await page.goto("https://google.com");
    await browser.close();
  });
  it("Launch Firefox", async () => {
    const browser = await firefox.launch({ headless: false }); // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    await page.goto("https://google.com");
    await browser.close();
  });
  it("Launch Webkit", async () => {
    const browser = await webkit.launch({ headless: false }); // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    await page.goto("https://google.com");
    await browser.close();
  });
});
