describe('Ahlan Admin Home Page Verification', () => {
    // Perform login before all tests
    before(() => {
      cy.visit('https://ahlan.ksaa.gov.sa/en/admin/login');
  
      // Enter the email address
      cy.get('input[type="text"]')
        .should('be.visible')
        .and('have.attr', 'name')
        .and('match', /email/i)
        .type('ahlanadmin@ksaa.gov.sa'); // Entering email
  
      // Enter the password
      cy.get('input#_com_liferay_login_web_portlet_LoginPortlet_password')
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .type('Admin#99'); // Entering password
  
      // Click the Sign In button
      cy.get('button')
        .contains('Sign In')
        .should('be.visible')
        .click();
    });
  
    it('Verifies the "تصميم" menu item', () => {
      cy.get('[role="menuitem"]').contains('تصميم').should('be.visible');
    });
  
    it('Verifies the "إنشاء" menu item', () => {
      cy.get('[role="menuitem"]').contains('إنشاء').should('be.visible');
    });
  
    it('Verifies the "التصنيف" menu item', () => {
      cy.get('[role="menuitem"]').contains('التصنيف').should('be.visible');
    });
  
    it('Verifies the "سلة المحذوفات" menu item', () => {
      cy.get('[role="menuitem"]').contains('سلة المحذوفات').should('be.visible');
    });
  });
  