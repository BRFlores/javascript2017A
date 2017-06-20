import { AplicPage } from './app.po';

describe('aplic App', () => {
  let page: AplicPage;

  beforeEach(() => {
    page = new AplicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
