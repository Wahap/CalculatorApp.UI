import { LoginPagePage } from './app.po';

describe('login-page App', () => {
  let page: LoginPagePage;

  beforeEach(() => {
    page = new LoginPagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
