import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as user from './actions';

Given(/^que eu acesso a calculadora$/, () => {
  user.openTheCalculator()
});

And(`desejo realizar uma {string}`, (operacao) => {
  user.defineOperationAs(operacao)
});

When(/^informar os valores$/, () => {
  user.fillValues()
});

When(/^finalizar a conta$/, () => {
  user.finishOperation()
});

Then(/^devo obter o resultado$/, () => {
  user.shouldSeeTheExpectedResult()
});