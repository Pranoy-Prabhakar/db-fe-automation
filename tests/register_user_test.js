/* Import page objects */
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TestData from "../test_data/testData";

fixture`Register Page`
  .page("http://dbankdemo.com/login");


test("Register User", async t => {
  await t
    .expect(LoginPage.signUp.visible).ok()
    .click(LoginPage.signUp) 
    .click(RegisterPage.titleSelect)
    .click(RegisterPage.titleValue)
    .typeText(RegisterPage.firstName, 'Peter')
    .typeText(RegisterPage.lastName, 'Parker')
    .click(RegisterPage.gender)
    .typeText(RegisterPage.dob,'10/12/1988') 
    .typeText(RegisterPage.ssn, TestData.testData.ssn)
    .typeText(RegisterPage.emailAddress,TestData.testData.emailId)
    .typeText(RegisterPage.password,'Chei6ain2ye')
    .typeText(RegisterPage.confirmPassword,'Chei6ain2ye')
    .click(RegisterPage.nextButton) 
    .typeText(RegisterPage.address,'Martenslaan 72b')
    .typeText(RegisterPage.locality,'Goudriaan')
    .typeText(RegisterPage.region, 'Goudriaan')
    .typeText(RegisterPage.postalCode, '5469AT')
    .typeText(RegisterPage.country,'Netherlands')
    .typeText(RegisterPage.homePhone, '6456378987')
    .typeText(RegisterPage.mobilePhone, '+31636775879')
    .typeText(RegisterPage.workPhone,'6456378987')
    .click(RegisterPage.agreeTerms)
    .click(RegisterPage.nextButton)
    .expect(RegisterPage.successRegistrationMessage.visible).ok()
    .expect(RegisterPage.successRegistrationMessage.innerText).contains('Success Registration Successful. Please Login.')      
});