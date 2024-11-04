import React from 'react'

//https://docs.cypress.io/guides/references/best-practices#How-It-Works
import App from './App'

// document.querySelector('#id|.my-class|element|[data-testid="svsf"]');
describe('<App />', () => {
    it('renders', () => {
        cy.mount(<App />);
        cy.get('body').then($body => {
            cy.log($body.html()); // Виведе HTML-код, щоб ви могли перевірити, що рендериться
        });
        cy.get('[data-testid="app"]').should('have.text', '');
    });
});