describe('Navigation and Element Verification', () => {
    beforeEach(() => {
        cy.setCookie('cookie-consent', 'true')
        cy.visit('https://ahlan.had.net.sa/en/web/home/home'); // Adjust URL as needed
        cy.get('.accept-cookies-btn').click()
      });
    it('Clicks on navigation, verifies elements, and clicks on a specific section', () => {
   
  
      // Click on the navigation menu item
      cy.get('.d-lg-block > .navbar-nav > #layout_15 > .nav-link')
        .should('be.visible')
        .click();
  
      // Verify all required elements
      cy.get('#fragment-7e2c9a8a-c422-6bbb-f941-c254a4caf1ee > .clearfix')
        .should('be.visible');
  
      cy.get('#main_item169422').should('be.visible');
      cy.get('#main_item169456').should('be.visible');
      cy.get('#main_item169668').should('be.visible');
      cy.get('#main_item188814').should('be.visible');
      cy.get('[data-analytics-asset-id="169499"]').should('be.visible');
      cy.get('.lfr-layout-structure-item-dee47583-410d-fd93-e10e-0a8dde1f8475').should('be.visible');
  
      cy.get('#fragment-f873d17c-3091-94e5-ac40-d3ab10566664 > .clearfix')
        .should('be.visible')
        .click(); // Click on the final element
  
    });
  });
  