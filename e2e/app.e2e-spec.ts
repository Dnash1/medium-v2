import { Af2testPage } from './app.po';

describe('af2test App', function() {
  let page: Af2testPage;

  beforeEach(() => {
    page = new Af2testPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
