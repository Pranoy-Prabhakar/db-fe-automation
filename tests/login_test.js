/* Import page objects */
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

fixture`Login Page`
  .page("http://dbankdemo.com/login");


test("Login with correct username and password", async t => {
  await t
    .typeText(LoginPage.usernameInput, "test1234@test.com")    
    .typeText(LoginPage.passwordInput, "Test1234.")
    .click(LoginPage.loginButton)                  
    .expect(DashboardPage.header.visible).ok()
    .click(DashboardPage.userIcon)
    .click(DashboardPage.logOutLink)
    .expect(LoginPage.logOutMessage.innerText).contains('Success Logout completed.')
});

test("Login with incorrect username and password", async t => {
  await t
    .typeText(LoginPage.usernameInput, "test1234@test.com")    
    .typeText(LoginPage.passwordInput, "Test")
    .click(LoginPage.loginButton)                  
    .expect(LoginPage.errorBLock.visible).ok()
    .expect(LoginPage.errorBLock.innerText).contains('Error Invalid credentials or access not granted.')
    .expect(LoginPage.errorMessage.visible).ok()
    .expect(LoginPage.errorMessage.innerText).eql('Error');
});

test("Login without username and password", async t => {
  await t
    .click(LoginPage.loginButton)                  
    .expect(LoginPage.errorBLock.visible).ok()
    .expect(LoginPage.errorBLock.innerText).contains('Error Invalid credentials or access not granted.')
    .expect(LoginPage.errorMessage.visible).ok()
    .expect(LoginPage.errorMessage.innerText).eql('Error');
});