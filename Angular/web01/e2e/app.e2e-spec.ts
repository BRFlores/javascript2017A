import { Web01Page } from './app.po';

describe('web01 App', () => {
  let page: Web01Page;

  beforeEach(() => {
    page = new Web01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
