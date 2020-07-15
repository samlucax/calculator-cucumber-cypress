#language: pt
Funcionalidade: Calculadora

  Como usuario, desejo utilizar a Calculadora
  Para que possa conferir minhas contas

Cenario: Calcular uma soma de valores
  Dado que eu acesso a calculadora
  E desejo realizar uma "soma"
  Quando informar os valores
  E finalizar a conta
  Entao devo obter o resultado

Cenario: Calcular uma subtração de valores
  Dado que eu acesso a calculadora
  E desejo realizar uma "subtração"
  Quando informar os valores
  E finalizar a conta
  Entao devo obter o resultado

Cenario: Calcular uma multiplicação de valores
  Dado que eu acesso a calculadora
  E desejo realizar uma "multiplicação"
  Quando informar os valores
  E finalizar a conta
  Entao devo obter o resultado

Cenario: Calcular uma divisão de valores
  Dado que eu acesso a calculadora
  E desejo realizar uma "divisão"
  Quando informar os valores
  E finalizar a conta
  Entao devo obter o resultado

Esquema do Cenario: Calcular uma <operacao> de valores
  Dado que eu acesso a calculadora
  E desejo realizar uma "<operacao>"
  Quando informar os valores
  E finalizar a conta
  Entao devo obter o resultado

  Exemplos:
  | operacao      |
  | soma          |
  | subtração     |
  | multiplicação |
  | divisão       |
