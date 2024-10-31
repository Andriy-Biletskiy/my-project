import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />);
    cy.get('[data-testid="app"]').should('have.text', 'My First React App');
  })
})