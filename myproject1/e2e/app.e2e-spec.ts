import { Myproject1Page } from './app.po';

describe('myproject1 App', function() {
  let page: Myproject1Page;

  beforeEach(() => {
    page = new Myproject1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
