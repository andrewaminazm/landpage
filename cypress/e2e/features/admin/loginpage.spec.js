describe('Ahlan Admin Login Page Verification', () => {
    it('Visits the login page and verifies email and password fields', () => {
      cy.visit('https://ahlan.ksaa.gov.sa/en/admin/login');
  
      // Verify the email address field
      cy.get('input[type="text"]')
        .should('be.visible')
        .and('have.attr', 'name')
        .and('match', /email/i);
  
      // Verify the password field
      cy.get('input#_com_liferay_login_web_portlet_LoginPortlet_password')
        .should('be.visible')
        .and('have.attr', 'type', 'password');
    });

    describe('Ahlan Admin Login Page Verification', () => {
        it('Visits the login page, enters credentials and verifies the fields', () => {
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
      
          // Optionally, click the login button if needed
          cy.get('button')
          .contains('Sign In')
          .should('be.visible')
          .click(); // Click th
        });
      });
      
  });
  