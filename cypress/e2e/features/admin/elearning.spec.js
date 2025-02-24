describe('Ahlan Admin - E-learning Content Verification', () => {
    before(() => {
      cy.visit('https://ahlan.ksaa.gov.sa/en/admin/login');
  
      // Enter Email
      cy.get('input[type="text"]')
        .should('be.visible')
        .type('ahlanadmin@ksaa.gov.sa');
  
      // Enter Password
      cy.get('input#_com_liferay_login_web_portlet_LoginPortlet_password')
        .should('be.visible')
        .type('Admin#99');
  
      // Click Sign In
      cy.get('button')
        .contains('Sign In')
        .should('be.visible')
        .click();
  
      // Ensure login success before proceeding
      cy.url().should('not.include', 'login');
    });
  
    it('Opens Applications Menu and Selects E-learning Content', () => {
      // Click the applications menu button
      cy.get('button[data-qa-id="applicationsMenu"]')
        .should('be.visible')
        .click();
  
      // Click on E-learning Content
      cy.contains('E-learning Content')
        .should('be.visible')
        .click();
    });
  
    it('Verifies the Plus (+) Button Appears', () => {
      cy.get('button.btn.btn-monospaced.btn-primary')
        .should('have.attr', 'style', 'width: 32px;height: 32px;')
        .should('be.visible');
    });
  
    it('Navigates to E-learning Section and Verifies Page Elements', () => {
      // Assuming "E-learning" is a menu item, click it
      cy.contains('E-learning')
        .should('be.visible')
        .click();
  
      // Verify the page loaded by checking a unique element
      cy.get('h1') // Assuming there's a heading
        .should('be.visible')
        .and('contain', 'E-learning');
    });
  });
  