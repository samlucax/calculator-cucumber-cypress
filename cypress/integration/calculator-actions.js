/// <reference types="cypress" />

const ELEMENTS = {
  resultado: '.display',
  operadores: '.operator',
  valores: 'div[class="button"], .button.zero',
  auxiliares: '.button.darker'
}

function getResultado(){
  return cy.get(ELEMENTS.resultado).invoke('text');
}

function getOperador(operador){
  return cy.get(ELEMENTS.operadores).contains(operador);
}

function getValor(valor){
  return cy.get(ELEMENTS.valores).contains(valor);
}

function getAuxiliar(auxiliar){
  return cy.get(ELEMENTS.auxiliares).contains(auxiliar)
}

export { 
  getResultado, 
  getOperador, 
  getValor, 
  getAuxiliar 
};