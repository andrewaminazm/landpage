describe('Footer Links Verification', () => {
    beforeEach(() => {
        cy.setCookie('cookie-consent', 'true')
        cy.visit('https://ahlan.had.net.sa/en/web/home/home'); // Adjust URL as needed
        cy.get('.accept-cookies-btn').click()
      });
    it('Checks all footer links are visible and clickable', () => {
     
  
      // Get all links inside the footer and verify they are visible
      cy.get('footer a').each(($link) => {
        cy.wrap($link)
          .should('be.visible') // Ensure the link is visible
          .and('have.attr', 'href') // Ensure the link has an href attribute
          .then((href) => {
            if (!href.startsWith('#')) { // Ignore empty or anchor links
              cy.request(href).its('status').should('eq', 200); // Ensure link is not broken
            }
          });
      });
    });
  });
  