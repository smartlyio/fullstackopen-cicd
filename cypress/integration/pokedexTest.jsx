describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon card can be navigated to', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.get('.pokemon-name').should('have.text', 'ivysaur')
  })
})