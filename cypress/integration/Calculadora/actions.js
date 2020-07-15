/// <reference types="cypress" />

import * as constants from './constants';
import * as elements from './elements';

function openTheCalculator(){
  cy.visit('/')
}

function defineOperationAs(operacao) {
  Cypress.env('operador', operacao);
}

function fillValues() {
  const firstValue = Math.floor(Math.random() * 9 + 1);
  const lastValue = Math.floor(Math.random() * 9 + 1);

  Cypress.env('firstValue', firstValue);
  Cypress.env('lastValue', lastValue);

  elements.getValor(firstValue).click()
  elements.getOperador().click()
  elements.getValor(lastValue).click()
}

function finishOperation() {
  elements.getOperador(constants.OPERADOR.DE_IGUALDADE).click()
}

function shouldSeeTheExpectedResult(){
  const expectedResult = expectedResultOfTheOperation(Cypress.env('operador'))
  elements.getResultado().should('be.equal', String(expectedResult))
}

function expectedResultOfTheOperation(operacao){
  const firstValue = Cypress.env('firstValue');
  const lastValue = Cypress.env('lastValue');

  switch (operacao) {
    case 'soma':
      return firstValue + lastValue;
    case 'subtração':
      return firstValue - lastValue;
    case 'multiplicação':
      return firstValue * lastValue;
    case 'divisão':
      return firstValue / lastValue;
    default:
      break;
  }
}

export {
  defineOperationAs,
  fillValues,
  openTheCalculator,
  finishOperation,
  shouldSeeTheExpectedResult
};