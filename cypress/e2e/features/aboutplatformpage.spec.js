describe('Home Page Validation', () => {
    beforeEach(() => {
        cy.setCookie('cookie-consent', 'true')
        cy.visit('https://ahlan.had.net.sa/en/web/home/home'); // Adjust URL as needed
        cy.get('.accept-cookies-btn').click()
      });
      
    it('Clicks on navigation item and verifies elements', () => {
    
  
      // Click on the navigation menu item
      cy.get('.d-lg-block > .navbar-nav > #layout_17 > .nav-link')
        .should('be.visible')
        .click();
  
      // Verify elements after clicking
      cy.get('#fragment-67f55244-37d4-8b7d-230b-82ac22829934 > .component-image > .w-100')
        .should('be.visible');
  
      cy.get('[data-analytics-asset-id="101428"] > .view-objective-div')
        .should('be.visible');
  
      cy.get('[data-analytics-asset-id="101402"] > .view-objective-div > .text-5')
        .should('be.visible');
  
      cy.get('[data-analytics-asset-id="101463"] > .view-objective-div')
        .should('be.visible');
  
      cy.get('.lfr-layout-structure-item-073d3cc5-b9fa-6449-865b-d1902afb5a15')
        .should('be.visible');
    });
  });
  