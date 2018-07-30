context('Project3', () => {
    beforeEach(() => {
      cy.visit('//localhost:3000/')
    })
  
    it('cy.window() - get the global window object', () => {
      // https://on.cypress.io/window
      cy.window().should('have.property', 'top')
    })

  })
  