import { AplicacionPage } from './app.po';

describe('aplicacion App', () => {
  let page: AplicacionPage;

  beforeEach(() => {
    page = new AplicacionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
