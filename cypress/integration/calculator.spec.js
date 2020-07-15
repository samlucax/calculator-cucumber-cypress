/// <reference types="cypress" />

// operadores
// valores
// resultado

import * as Calculator from './calculator-actions';

describe('Calculator', () => {
  beforeEach('Given I Open the Calculator', () => {
    cy.visit('/');
  });

  it('Deve realizar uma soma com sucesso', () => {
    Calculator.getValor(2).click();
    Calculator.getOperador('+').click();
    Calculator.getValor(2).click();
    Calculator.getOperador('=').click();
    Calculator.getResultado().should('be.equal', String(4));    // .should('have.value', 2+2);
  });
});