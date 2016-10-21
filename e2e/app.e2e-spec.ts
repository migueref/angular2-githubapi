import { GithubReposListPage } from './app.po';

describe('github-repos-list App', function() {
  let page: GithubReposListPage;

  beforeEach(() => {
    page = new GithubReposListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
