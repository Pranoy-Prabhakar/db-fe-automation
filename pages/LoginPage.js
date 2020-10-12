import { Selector, t } from 'testcafe';

class LoginPage {
  constructor() {
    this.usernameInput = Selector("#username");
    this.passwordInput = Selector("#password");
    this.loginButton = Selector("#submit");
    this.errorBLock = Selector("div").withAttribute('class','sufee-alert alert with-close alert-danger alert-dismissible fade show');
    this.errorMessage = Selector("span").withAttribute('class','badge badge-pill badge-danger');
    this.signUp = Selector("a").withAttribute('href','/signup');
    this.logOutMessage = Selector("div").withAttribute('class','sufee-alert alert with-close alert-success alert-dismissible fade show');
  }
}

export default LoginPage = new LoginPage();