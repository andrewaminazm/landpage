class SignUpPage {
  getFullNameInput() {
    return cy.get('#Input_FullName')
  }

  getEmailField() {
    return cy.get('#Input_EmailAddress')
  }

  getPhoneNumber() {
    return cy.get('#Input_MobileNumber')
  }

  getPassword() {
    return cy.get('#Input_Password');
  }

  submitForm() {
    return cy.findByRole('button', {  name: /تسجيل/i}) // Update the selector if needed
  }
  getBusinessNameInput() {
    return cy.get('#Input_BusinessName');
  }
  getEmployeeCountButton() {
    return cy.findByRole('button', { name: /1\-5 موظفين/i });
  }
  getContinueButton() {
    return cy.findByRole('button', { name: /متابعة/i });
  }
  // Random Data Generators
  generateRandomFullName() {
    const names = ['محمد علي', 'أحمد حسن', 'يوسف إبراهيم', 'عمر خالد', 'سعيد محمود'];
    return names[Math.floor(Math.random() * names.length)];
  }

  generateRandomEmail() {
    const domains = ['example.com', 'testmail.com', 'demo.io'];
    const randomStr = Math.random().toString(36).substring(2, 10);
    return `user${randomStr}@${domains[Math.floor(Math.random() * domains.length)]}`;
  }

  generateRandomPhoneNumber() {
    return `01${Math.floor(100000000 + Math.random() * 900000000)}`; // Generates Egyptian-style phone number
  }

  generateRandomPassword() {
    return `Pass${Math.random().toString(36).slice(-8)}!`; // Generates secure password
  }
  generateRandomBusinessName() {
    const businesses = ['Tech Solutions', 'Smart Innovations', 'Future Ventures', 'Alpha Enterprises', 'Digital Hub'];
    return `${businesses[Math.floor(Math.random() * businesses.length)]} ${Math.floor(1000 + Math.random() * 9000)}`;
  }

  clickEmployeeCountButton() {
    this.getEmployeeCountButton().click();
  }
  clickContinueButton() {
    this.getContinueButton().click();
  }
  clickBarbershopButton() {
    cy.contains('button', 'صالون حلاقة').click();
  }
  getServiceNameInput() {
    return cy.findByRole('textbox', { name: /اسم الخدمة/i });
  }

  getPriceInput() {
    return cy.findByRole('textbox', { name: /السعر/i });
  }

  getSaveButton() {
    return cy.findByText(/حفظ/i);
  }

  // Random Data Generators
  generateRandomServiceName() {
    const services = ['خدمة حلاقة', 'خدمة تنظيف', 'خدمة صيانة', 'خدمة تصليح', 'خدمة توصيل'];
    return services[Math.floor(Math.random() * services.length)];
  }

  generateRandomPrice() {
    return (Math.random() * 1000).toFixed(2); // Random price between 0 and 1000
  }

  // Actions
  fillServiceName() {
    const serviceName = this.generateRandomServiceName();
    this.getServiceNameInput().type(serviceName);
  }

  fillPrice() {
    const price = this.generateRandomPrice();
    this.getPriceInput().type(price);
  }

  clickSaveButton() {
    this.getSaveButton().click();
  }

  // Combine actions in a single function
  fillFormAndSave() {
    this.fillServiceName();
    this.fillPrice();
    this.clickSaveButton();
  }
  verifyTextCenterVisible() {
    cy.get('.text-center').should('be.visible');
  }
}

export default new SignUpPage();
