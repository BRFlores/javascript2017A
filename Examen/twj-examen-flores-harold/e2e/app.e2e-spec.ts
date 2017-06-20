import { TwjExamenFloresHaroldPage } from './app.po';

describe('twj-examen-flores-harold App', () => {
  let page: TwjExamenFloresHaroldPage;

  beforeEach(() => {
    page = new TwjExamenFloresHaroldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
