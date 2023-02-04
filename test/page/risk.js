import { page } from '@playwright/test';

export class RiskPage {
   constructor(page) {
        this.page = page;
      
        
      }
     
      async fillName(riskName) {
        await this.page.frameLocator('iframe[name="\\/Views\\/ProjectPlace\\/Risks\\/EditRisk\\.aspx\\?ProjectID\\=68409\\&OpenedFromMyPlaceRisks\\=False"]').getByLabel('Namn:').fill(riskName);
      }
     

}

