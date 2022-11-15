describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture: 'getUrls'})
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      "id": 2,
      "long_url": "https://www.fireclaytile.com/blog/full/color-trend-forecast-for-2022?epik=dj0yJnU9WW1kaW1rTkV3QVZwM3ZxTzU1QTlfampqZ3FpTXhmVncmcD0wJm49RUN1bWhmQzFPLWQzVFFVWGdsS01mUSZ0PUFBQUFBR056em1J",
      "short_url": "http://localhost:3001/useshorturl/2",
      "title": "Pinterest 2"
      })
    cy.visit('http://localhost:3000/')
  })
  it('should be able to fill out the form and POST a new url', () => {
    cy.get('[placeholder="Title..."]').type('Pinterest 2')
    cy.get('[placeholder="URL to Shorten..."]').type('https://www.fireclaytile.com/blog/full/color-trend-forecast-for-2022?epik=dj0yJnU9WW1kaW1rTkV3QVZwM3ZxTzU1QTlfampqZ3FpTXhmVncmcD0wJm49RUN1bWhmQzFPLWQzVFFVWGdsS01mUSZ0PUFBQUFBR056em1J')
    cy.get('button').click().wait(500)
    cy.get('section > :nth-child(3)')
    cy.get(':nth-child(3) > h3').contains('Pinterest 2')
    cy.get(':nth-child(3) > p').contains('https://www.fireclaytile.com/blog/full/color-trend-forecast-for-2022?epik=dj0yJnU9WW1kaW1rTkV3QVZwM3ZxTzU1QTlfampqZ3FpTXhmVncmcD0wJm49RUN1bWhmQzFPLWQzVFFVWGdsS01mUSZ0PUFBQUFBR056em1J')
  })
})