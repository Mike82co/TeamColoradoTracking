describe('User Experiance', () =>{  
  it('Should display The Correct Team in Header ', () => {   
      cy.visit('localhost:3000/');
      cy.get('#root > div > header')
      .should('contain', 'TEAM COLORADO DASHBOARD');    
  })
  it('Should Display a Chart' ,() => {
      cy.get('#chart-1 > canvas').should('contain', '');
  })
  it('Should display a new rider form', () => {
    cy.get('#headerNav > button:nth-child(2)')
    .click()
    cy.get('#root > div > div.mainContent > div')
    .should('contain', 'New Rider Information Form')
  })
  it('Should display a new team form', () => {
    cy.get('#headerNav > button:nth-child(4)')
    .click()
    cy.get('#root > div > div.mainContent > div')
    .should('contain', 'New Team Form')
  })
})

