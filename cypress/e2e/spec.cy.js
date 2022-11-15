describe('User flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture: 'getUrls'})
    cy.visit('http://localhost:3000/')
  })
  it('should display the header and form', () => {
    cy.get('h1').contains('URL Shortener')
    cy.get('[placeholder="Title..."]')
    cy.get('[placeholder="URL to Shorten..."]')
    cy.get('button')
  })
  it('should display the existing url cards', () => {
    cy.get('section > :nth-child(1)')
    cy.get(':nth-child(1) > h3').contains('Awesome photo')
    cy.get(':nth-child(1) > a').contains('http://localhost:3001/useshorturl/1')
    cy.get(':nth-child(1) > p').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    cy.get('section > :nth-child(2)')
    cy.get(':nth-child(2) > h3').contains('pinterest')
    cy.get(':nth-child(2) > a').contains('http://localhost:3001/useshorturl/3')
    cy.get(':nth-child(2) > p').contains('https://thespaces.com/architect-michael-haverland-and-novelist-philip-galanes-list-their-east-hampton-glass-house/?epik=dj0yJnU9VmhYV3l2MmtRd3F4M1k0VmVHeE5Qa0ItV3BZRkNBamUmcD0wJm49cjkyZ3VnLWtEWXhCUU9uSGtFbm9YZyZ0PUFBQUFBR056d3pZ')
  })
  it('should be able to fill out the form', () => {
    cy.get('[placeholder="Title..."]').type('Pinterest 2')
    cy.get('[placeholder="URL to Shorten..."]').type('https://www.fireclaytile.com/blog/full/color-trend-forecast-for-2022?epik=dj0yJnU9WW1kaW1rTkV3QVZwM3ZxTzU1QTlfampqZ3FpTXhmVncmcD0wJm49RUN1bWhmQzFPLWQzVFFVWGdsS01mUSZ0PUFBQUFBR056em1J')
  })
})