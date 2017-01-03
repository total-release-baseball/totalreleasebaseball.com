import { TotalReleaseBaseballPage } from './app.po';

describe('total-release-baseball App', function() {
  let page: TotalReleaseBaseballPage;

  beforeEach(() => {
    page = new TotalReleaseBaseballPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
