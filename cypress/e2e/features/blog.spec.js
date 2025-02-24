describe('Navigation and Blog Page Verification', () => {
    beforeEach(() => {
        cy.setCookie('cookie-consent', 'true')
        cy.visit('https://ahlan.had.net.sa/en/web/home/home'); // Adjust URL as needed
        cy.get('.accept-cookies-btn').click()
      });
    it('Clicks on navigation and verifies blog elements', () => {
      cy.visit('https://yourwebsite.com'); // Replace with the actual URL
  
      // Click on the navigation menu item
      cy.get('.d-lg-block > .navbar-nav > #layout_27 > .nav-link')
        .should('be.visible')
        .click();
  
      // Verify all required blog elements
      cy.get('[data-analytics-asset-id="101854"] > .view-blog-in-blogPage-div').should('be.visible');
      cy.get('[data-analytics-asset-id="101780"] > .view-blog-in-blogPage-div').should('be.visible');
      cy.get('[data-analytics-asset-id="106657"] > .view-blog-in-blogPage-div').should('be.visible');
      cy.get('[data-analytics-asset-id="101833"] > .view-blog-in-blogPage-div').should('be.visible');
      cy.get('[data-analytics-asset-id="101875"] > .view-blog-in-blogPage-div').should('be.visible');
    });
  });
  