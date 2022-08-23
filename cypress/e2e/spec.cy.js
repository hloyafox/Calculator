/* eslint-disable no-undef */
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="title"]').should('be.visible');
  })
})