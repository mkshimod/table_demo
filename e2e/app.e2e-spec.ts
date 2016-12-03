import { TableDemoPage } from './app.po';

describe('table-demo App', function() {
  let page: TableDemoPage;

  beforeEach(() => {
    page = new TableDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
