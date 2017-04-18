import { ChartE2ePage } from './app.po';

describe('chart-e2e App', () => {
  let page: ChartE2ePage;

  beforeEach(() => {
    page = new ChartE2ePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
