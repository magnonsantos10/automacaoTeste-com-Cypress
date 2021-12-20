/// <reference types="Cypress" />

describe('testeOne', () => {
    it('home', () => {
        cy.visit('https://www.google.com.br/')
        cy.get('#hplogo').should('be.visible')
    })
})