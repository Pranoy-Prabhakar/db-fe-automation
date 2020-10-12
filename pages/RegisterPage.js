import { Selector, t } from 'testcafe';

class RegisterPage {
  constructor() {
    this.titleSelect = Selector("#title")
    this.titleValue = Selector('option').withAttribute('value','Mr.')
    this.firstName = Selector("#firstName")
    this.lastName = Selector("#lastName")
    this.gender1 = Selector('label').withText('M')
    this.gender = Selector("input").withAttribute('value','M');
    this.dob = Selector("#dob")
    this.ssn = Selector("#ssn")
    this.emailAddress = Selector("#emailAddress")
    this.password = Selector("#password")
    this.confirmPassword = Selector("#confirmPassword")
    this.nextButton = Selector("button").withAttribute('class','btn btn-primary btn-flat m-b-30 m-t-30')
    this.address = Selector("#address")
    this.locality =Selector("#locality")
    this.region =Selector("#region")
    this.postalCode = Selector("#postalCode")
    this.country = Selector("#country")
    this.homePhone = Selector("#homePhone")
    this.mobilePhone = Selector("#mobilePhone")
    this.workPhone = Selector("#workPhone")
    this.agreeTerms = Selector("#agree-terms")
    this.registerButton = Selector("button").withAttribute('class','btn btn-primary btn-flat m-b-30 m-t-30')
    this.successRegistrationMessage = Selector("div").withAttribute('class','sufee-alert alert with-close alert-success alert-dismissible fade show'); 
}
}


export default RegisterPage = new RegisterPage();