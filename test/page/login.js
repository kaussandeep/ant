import { page } from '@playwright/test';

export class LoginPage{
constructor(page){
    this.page = page;
}

async goto() {
    await this.page.goto('https://qatester1.demo.projects.se/Login/Login.aspx?ReturnUrl=%2f');
  }

async login (){
    await this.page.locator('[id="_userNameTextBox"]').fill('qatester13');
  await this.page.locator('[id="_passwordTextBox"]').fill('Showman1!');
  await this.page.getByRole('link', { name: 'Logga in' }).click({ force: true });
}

}