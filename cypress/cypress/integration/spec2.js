describe('Teste End-to-End', () => {
    it('Teste 1: Visita Página', () => {
        // Abre o site da micro-livraria.
        cy.visit('http://localhost:5000/')
    })

    it('Teste 2: Verifica item na página', () => {
        // Seleciona o cartão do livro Design Patterns.
        cy.get('.book[data-id="3"]').should('contain.text', 'Design Patterns')
    })

    it('Teste 3: Calcula Frete', () => {
        cy.get('.book[data-id="3"]').within(() => {
            cy.get('input').type('10000-000')
            cy.contains('Calcular Frete').click()
        })

        cy.wait(2000)
        cy.get('.swal-text').should('contain.text', 'O frete é: R$')
        cy.get('.swal-button').click()
        cy.get('.swal-overlay').should('not.be.visible')
    })

    it('Teste 4: Compra um livro', () => {
        cy.get('.book[data-id="3"]').within(() => {
            cy.contains('Comprar').click()
        })

        cy.wait(2000)
        cy.get('.swal-text').should('have.text', 'Sua compra foi realizada com sucesso')
        cy.get('.swal-button').click()
        cy.get('.swal-overlay').should('not.be.visible')
    })
})
