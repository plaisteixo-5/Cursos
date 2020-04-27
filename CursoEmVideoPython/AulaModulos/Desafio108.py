#Módulo moeda usada no desafio 108
# def aumentar(n = 0,p = 0):
#     return n + (n*(p/100))

# def diminuir(n = 0,p = 0):
#     return n - (n*(p/100))

# def metade(n = 0):
#     return n/2

# def dobro(n = 0):
#     return n*2

# def moeda(preço = 0, moeda = 'R$'):
#     return (f'{moeda}{preço:.2f}'.replace(".",","))

import moeda

p = float(input('Digite o valor: R$'))
print(f'O dobro de {moeda.moeda(p)} é {moeda.moeda(moeda.dobro(p))}')
print(f'13% desse valor é equivalente a {moeda.moeda(moeda.aumentar(p,13))}')
print(f'-10% desse valor é equivalente a {moeda.moeda(moeda.diminuir(p,10))}')
print(f'A metade do valor é {moeda.moeda(moeda.metade(p))}')