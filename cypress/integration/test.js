describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io');
  });
});

describe('Homepage test', () => {
  it('Visits the homepage', () => {
    cy.visit('https://week6-mad-9l0j8iui2-week6-mad.vercel.app/');
  });
});

describe('Can navigate to a product page', () => {
  it('Can navigate to the StopStopStoplin product page', () => {
    cy.visit('https://week6-mad-9l0j8iui2-week6-mad.vercel.app/');
    cy.contains('StopStopStoplin').click();
    cy.url().should('include', '/StopStopStoplin');
  });
  it('Can navigate to the GoGoGoblin product page', () => {
    cy.visit('https://week6-mad-9l0j8iui2-week6-mad.vercel.app/');
    cy.contains('GoGoGoblin').click();
    cy.url().should('include', '/GoGoGoblin');
  });
  it('Can navigate to the GoGoGoblin II product page', () => {
    cy.visit('https://week6-mad-9l0j8iui2-week6-mad.vercel.app/');
    cy.contains('GoGoGoblin II').click();
    cy.url().should('include', '/GoGoGoblin%20II');
  });
  it('Can navigate to the GoGoGoblin Strategy Guide product page', () => {
    cy.visit('https://week6-mad-9l0j8iui2-week6-mad.vercel.app/');
    cy.contains('GoGoGoblin: (Unofficial) Strategy Guide').click();
    cy.url().should(
      'include',
      '/GoGoGoblin:%20(Unofficial)%20Strategy%20Guide'
    );
  });
});

describe('Testing homepage button in header', () => {
  it('Can navigate to the StopStopStoplin product page and back to the home page', () => {
    cy.visit(
      'https://week6-mad-9l0j8iui2-week6-mad.vercel.app/products/StopStopStoplin'
    );
    cy.contains('MAD_GAMES').click();
    cy.title().should('include', 'MAD GAMES');
  });
});
