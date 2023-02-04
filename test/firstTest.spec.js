
import { test, expect } from '@playwright/test';
import { RiskPage } from './page/risk.js'
import { LoginPage } from './page/login.js'

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const riskPage = new RiskPage(page);


await loginPage.goto();
await loginPage.login();

await page.getByRole('button', { name: 'Huvudmeny' }).click();

  await page.getByRole('button', { name: 'Projekt Kastanjen' }).click( { force: true });
  await page.getByRole('button', { name: 'Risker' }).click();
  await page.getByTitle('Ny risk').click();
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Namn:').click();
await riskPage.fillName("newRisk");
 
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Namn:').click();

  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Namn:').press('Tab');
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByRole('combobox', { name: 'Sannolikhet (S):' }).selectOption('2');
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByRole('combobox', { name: 'Konsekvens (K):' }).selectOption('3');
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByRole('combobox', { name: 'Berörda intressenter:' }).selectOption('33609');
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Kostnad för åtgärd:').click();
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Kostnad för åtgärd:').fill('1200');
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Beskrivning:').click();
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Beskrivning:').fill('example beskrivning');
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Sannolik konsekvenskostnad:').click();
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Sannolik konsekvenskostnad:').fill('1500');
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByText('Inga').click();
  await page.getByRole('checkbox', { name: 'Begränsa' }).check();
  await page.getByRole('checkbox', { name: 'Dela' }).check();
  await page.getByRole('link', { name: 'Markera alla', exact: true }).click();
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').locator('html').click();
  await page.locator('.projectsWindowOverlay').click();
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').locator('html').click();
  await page.locator('.projectsWindowOverlay').click();
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').locator('html').click();
  await page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').locator('body').press('Escape');
});