import { Selector, t } from 'testcafe';

class DashboardPage {
  constructor() {
    this.header = Selector("#header")
    this.userIcon = Selector("img").withAttribute('class', 'user-avatar rounded-circle')
    this.logOutLink = Selector("a").withAttribute('href', '/logout')
  }
}
  export default DashboardPage = new DashboardPage();