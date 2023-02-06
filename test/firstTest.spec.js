
import { test, expect } from '@playwright/test';
import { RiskPage } from './page/risk.js'
import { LoginPage } from './page/login.js'

test.describe("antura", () => {


test('Add risk and verify risk is added', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const riskPage = new RiskPage(page);


await loginPage.goto();
await loginPage.login();

await page.getByRole('button', { name: 'Huvudmeny' }).click();

await page.getByRole('button', { name: 'Projekt Kastanjen' }).click( { force: true });
await riskPage.clickRisk();
await riskPage.fillRiskDetails("newRisk");


});
});