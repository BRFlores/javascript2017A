import { TwjExamenApiFloresHaroldPage } from './app.po';

describe('twj-examen-api-flores-harold App', () => {
  let page: TwjExamenApiFloresHaroldPage;

  beforeEach(() => {
    page = new TwjExamenApiFloresHaroldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
