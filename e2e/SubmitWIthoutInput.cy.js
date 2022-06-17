describe('SubmitWithoutInput', () => {
  it('passes', () => {
    cy.visit('https://josephyap9.wixsite.com/qaetestsite')
    cy.title().should('eq', 'Home | QAE Test Site')
    cy.wait(4000) //wait for page to fully load
    cy.get('[data-testid="buttonElement"]').click()
    cy.get('[id="input_comp-l46hci9f1"]').should('have.css','background-color','rgba(255, 64, 64, 0.1)')
    cy.get('[id="input_comp-l46hci9k2"]').should('have.css','background-color','rgba(255, 64, 64, 0.1)')
    cy.get('[id="collection_comp-l46hci9n"]').should('have.css','background-color','rgba(255, 64, 64, 0.1)')
    cy.get('[class="TUQC6"]').should('have.css','background-color','rgba(255, 64, 64, 0.1)')

  })
})
