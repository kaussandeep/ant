import { expect, page } from '@playwright/test';
var assert = require('assert');

export class RiskPage {
   constructor(page) {
        this.page = page;
      
        
      }
     async clickRisk(){
      await this.page.getByRole('button', { name: 'Risker' }).click();
      await this.page.getByTitle('Ny risk').click();
     }
   
     async fillRiskDetails (riskName){
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Namn:').fill(riskName);
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Namn:').press('Tab');
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByRole('combobox', { name: 'Status:' }).press('Tab');
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').locator('[id="_taskGroupPanel__taskNameSection__groupPanel__ownerGroupSection__ownerChooser"]').getByRole('link').press('Tab');
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Beskrivning:').fill('beskrivning risk');
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Beskrivning:').press('Tab');
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByRole('link', { name: 'Riskvärdesförklaring' }).press('Tab');
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByRole('combobox', { name: 'Sannolikhet (S):' }).press('ArrowDown');
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByRole('combobox', { name: 'Sannolikhet (S):' }).selectOption('3');
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByRole('combobox', { name: 'Sannolikhet (S):' }).press('Tab');
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByRole('combobox', { name: 'Konsekvens (K):' }).selectOption('3');
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByRole('combobox', { name: 'Berörda intressenter:' }).selectOption('33609');
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Kostnad för åtgärd:').click();
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Kostnad för åtgärd:').fill('10000');
      await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByRole('button', { name: 'OK' }).click();
  
   
      await expect(this.page.getByText(riskName)).toContainText(riskName);
      await this.page.getByRole('row', { name: 'ID Risk Beskrivning S K S*K RV Riskvärdesförklaring Åtgärdsklassning Åtgärder Status Ägare Riskhistorik' }).getByRole('checkbox').check();
      await this.page.getByTitle('Ta bort').click();
      await this.page.getByRole('link', { name: 'Ja' }).click();

      
    
     }

}

