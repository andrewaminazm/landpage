import SignUpPage from '../pages/SignUpPage.js';


describe('Rekaz.io Sign-Up Test', () => { 
    beforeEach(() => {
       
        cy.visit('https://ahlan.had.net.sa/en/web/home/home'); // Adjust URL as needed
        cy.get('.accept-cookies-btn').click()
      });
      
    

            

              it('check home page', () => {
          // Visit the sign-up page
          cy.get('.site-logo-with-beta > [height="56"]').should('be.visible');

          // Check navigation menu item
          cy.get('.d-lg-block > .navbar-nav > #layout_35 > .nav-link > .menu-item-mobile > span')
            .should('be.visible');
      
          // Scroll to and check a section
          cy.get('.lfr-layout-structure-item-0f51306c-6265-c499-a72c-ed258d7eff4b > .row > :nth-child(4)')
            .scrollIntoView()
            .should('be.visible');
      
          // Scroll to another section and verify
          cy.get('.active > .journal-content-article > .container-skills-inner > .skill-img-box-view')
            .scrollIntoView()
            .should('be.visible');
      
          // Final scroll to main content
          cy.get('#main-content')
            .scrollIntoView()
            .should('be.visible');
          
       
        });



      });
      
    
    
