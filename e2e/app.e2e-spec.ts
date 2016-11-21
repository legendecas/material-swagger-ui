import { MaterialSwaggerUiPage } from './app.po';

describe('material-swagger-ui App', function() {
  let page: MaterialSwaggerUiPage;

  beforeEach(() => {
    page = new MaterialSwaggerUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
