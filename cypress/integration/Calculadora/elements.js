import * as constants from './constants';

const elements = {
  resultado: '.display',
  operadores: '.operator',
  valores: 'div[class="button"], .button.zero',
  auxiliares: '.button.darker'
}

function getResultado(){
  return cy.get(elements.resultado).invoke('text');
}

function getOperador(operador){
  const operacao = operador ? operador : transformOperator(Cypress.env('operador'))
  return cy.get(elements.operadores).contains(operacao);
}

function getValor(valor){
  return cy.get(elements.valores).contains(valor);
}

function getAuxiliar(auxiliar){
  return cy.get(elements.auxiliares).contains(auxiliar)
}

function transformOperator(operacao){
  switch (operacao) {
    case 'soma':
      return constants.OPERADOR.DE_SOMA
    case 'subtração':
      return constants.OPERADOR.DE_SUBTRACAO
    case 'multiplicação':
      return constants.OPERADOR.DE_MULTIPLICACAO
    case 'divisão':
      return constants.OPERADOR.DE_DIVISAO
    default:
      break;
  }
}

export {
  getResultado,
  getOperador,
  getValor,
  getAuxiliar
}