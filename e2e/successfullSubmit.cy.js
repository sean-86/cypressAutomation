describe('Successful submit', () => {
  it('passes', () => {

    cy.visit('https://josephyap9.wixsite.com/qaetestsite')
    cy.get('[data-testid="buttonElement"]').click()
    cy.get('[id="input_comp-l46hci9f1"]').type('John').should('have.value', 'John')
    cy.get('[id="input_comp-l46hci9k2"]').type('John@gmail.com').should('have.value', 'John@gmail.com')
    cy.get('[id="collection_comp-l46hci9n"]').select('QAE').should('have.value', 'QAE')
    cy.get('[id="input_comp-l46hci9w"]').type("12345678").should('have.value', '12345678')
    cy.get('[id="input_comp-l46hci9y2"]').click({force: true})
    cy.get('button').contains('8').click()  // alwyas select the 8th day
    cy.get('[id="input_comp-l46hcia3"]').type('100000').should('have.value', '100000')
    cy.get('[type="radio"]._2h4WF').first().check({force: true})
    cy.get('[type="checkbox"]').check()
    cy.get('[data-testid="buttonElement"]').click()
    cy.screenshot()

  })
})
