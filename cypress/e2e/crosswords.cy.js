describe('Login Functionality', () => {
    it('should log in with valid credentials', () => {
        cy.visit('/login');
        cy.get('input[name="username"]').type('1');
        cy.get('input[name="password"]').type('1');
        cy.get('button[type="submit"]').click();
        cy.contains('Logout').should('be.visible');
        cy.url().should('include', '/mein-menu');
    });

    it('should not log in with invalid credentials', () => {
        cy.visit('/login');

        cy.get('input[name="username"]').type('wrong');
        cy.get('input[name="password"]').type('wrong');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/login');
    });
});

describe('Mein Menu Functionality', () => {
    before(() => {
        cy.visit('/login');
        cy.get('input[name="username"]').type('1');
        cy.get('input[name="password"]').type('1');
        cy.get('button[type="submit"]').click();
    });

    it('should display crossword options in Mein Menu when logged in', () => {
        cy.visit('/mein-menu');
        cy.contains('Мій кросворд').should('be.visible');
        cy.contains('+').should('be.visible');
    });

    it('should log out and redirect to Home', () => {
        cy.visit('/mein-menu');
        cy.get('button.logout-button').click();
        cy.url().should('include', '/');
        cy.contains('MeinMenu').should('not.exist');
    });
});

describe('Crossword Functionality', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.get('input[name="username"]').type('1');
        cy.get('input[name="password"]').type('1');
        cy.get('button[type="submit"]').click();
        cy.visit('/mein-menu');
        cy.contains('Мій кросворд').click();
    });

    it('should complete a crossword and show completion message', () => {
        cy.get('.crossword-input-class').first().type('your answer here');
        cy.get('button').contains('Next').click();
        cy.contains('Ви успішно пройшли кросворд').should('be.visible');
    });
});
