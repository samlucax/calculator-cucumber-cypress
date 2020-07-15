#language: pt
Funcionalidade: Calculadora

  Como usuario, desejo utilizar a Calculadora
  Para que possa conferir minhas contas

Contexto:
  Dado que eu acesso a calculadora

Cenario: Calcular uma soma de valores
  E desejo realizar uma "soma"
  Quando informar os valores "2" e "2"
  E finalizar a conta
  Entao devo obter o resultado "4"

Cenario: Calcular uma subtração de valores
  E desejo realizar uma "subtração"
  Quando informar os valores "9" e "3"
  E finalizar a conta
  Entao devo obter o resultado "6"

Esquema do Cenario: Calcular uma <operacao> de valores
  E desejo realizar uma "<operacao>"
  Quando informar os valores "<primeiro>" e "<segundo>"
  E finalizar a conta
  Entao devo obter o resultado "<resultado>"

  Exemplos:
  | operacao      |  primeiro  | segundo | resultado |
  | soma          |  2         | 2       | 4         |
  | subtração     |  2         | 2       | 0         |
  | divisão       |  6         | 2       | 3         |
  | multiplicação |  7         | 7       | 49        |