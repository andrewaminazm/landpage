import SignUpPage from '../pages/SignUpPage.js';


describe('Rekaz.io Sign-Up Test', () => { 
    beforeEach(() => {
        cy.visit('https://platform.rekaz.io/Account/Register'); // Adjust URL as needed
      });
      
    

            

              it('should allow a user to sign up successfully with random data', () => {
          // Visit the sign-up page
          
      
          // Fill in the registration form
       cy.findByText(/روابط الدفع/i).click()

cy.findByRole('button', {  name: /متابعة/i}).click()

const fullName = SignUpPage.generateRandomFullName();
const email = SignUpPage.generateRandomEmail();
const phoneNumber = SignUpPage.generateRandomPhoneNumber();
const password = SignUpPage.generateRandomPassword();
const businessName = SignUpPage.generateRandomBusinessName();
SignUpPage.getFullNameInput().type(fullName);
SignUpPage.getEmailField().type(email);
SignUpPage.getPhoneNumber().type(phoneNumber);
SignUpPage.getPassword().type(password);

SignUpPage.submitForm().click()
SignUpPage.getBusinessNameInput().type(businessName);
SignUpPage.clickEmployeeCountButton();
SignUpPage.clickContinueButton();
SignUpPage.clickBarbershopButton(); 
SignUpPage.fillFormAndSave();
SignUpPage.verifyTextCenterVisible();
        });



      });
      
    
    
