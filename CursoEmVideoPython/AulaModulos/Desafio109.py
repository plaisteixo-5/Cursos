# Módulo moeda do desafio 108
# def aumentar(n = 0,p = 0,f = False):
#     if f:
#         return moeda(n + (n*(p/100)))    
#     else:
#         return n + (n*(p/100))

# def diminuir(n = 0,p = 0,f = False):
#     if f:
#         return moeda(n - (n*(p/100)))
#     else:
#         n - (n*(p/100))

# def metade(n = 0,f = False):
#     if f:
#         return moeda(n/2)
#     else:
#         return n/2

# def dobro(n = 0, f = False):
#     if f:
#         return moeda(n*2)
#     else:
#         return n*2

# def moeda(preço = 0, moeda = 'R$'):
#     return (f'{moeda}{preço:.2f}'.replace(".",","))
import moeda

p = float(input('Digite o valor: R$'))
print(f'O dobro de {moeda.moeda(p)} é {moeda.dobro(p,f = True)}')
print(f'13% desse valor é equivalente a {moeda.aumentar(p,13,f = True)}')
print(f'-10% desse valor é equivalente a {moeda.diminuir(p,10,True)}')
print(f'A metade do valor é {moeda.metade(p,True)}')