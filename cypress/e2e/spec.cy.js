describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://buildstats.volgaunion.ru/');
    cy.get('[data-cy="title"]').should('be.visible');
  })
})