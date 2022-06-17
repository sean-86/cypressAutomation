describe('SubmitWithoutInput', () => {
  it('passes', () => {
    cy.visit('https://josephyap9.wixsite.com/qaetestsite')
    cy.get('[data-testid="buttonElement"]').click()
    
  })
})
