from biblio.interface import*
from biblio.Arquivo import*
from time import sleep

arq = 'registro.txt'

if not arqExist(arq):
    criaArq(arq)

while True:
    resposta = menu(['Ver Pessoas Cadastradas','Cadastrar Nova Pessoa','Sair do Sistema'])
    if resposta == 1:
        # Lista o arquivo
        lerArq(arq)
    elif resposta == 2:
        cabeçalho('Novo Cadastro')
        nome = str(input('Nome: '))
        idade = leiaint('Idade: ')
        cadastrar(arq,nome,idade)
    elif resposta == 3:
        cabeçalho('Saiu do sistema... Até logo!')
        break
    else:
        print('\033[0;31mERRO! Digite uma opção válida\033[m')
    sleep(2)