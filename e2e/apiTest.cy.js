describe('API Test', () => {
  it('passes', () => {
    cy.request('https://catfact.ninja/fact').as('cat')
    cy.get('@cat').its('status').should('equal',200)
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', { userId: '50',id:101,title:"Testing123",body:"test" })
    .then((response) => {
    expect(response.body).to.have.property('userId', '50')
    expect(response.body).to.have.property('title', 'Testing123')
    expect(response.body).to.have.property('body', 'test')
  })


  })
})
