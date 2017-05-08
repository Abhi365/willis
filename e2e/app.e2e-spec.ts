import { AgGridTutPage } from './app.po';

describe('ag-grid-tut App', function() {
  let page: AgGridTutPage;

  beforeEach(() => {
    page = new AgGridTutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
