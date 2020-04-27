import moeda

p = float(input('Digite o valor: R$'))
print(f'O dobro do valor é {moeda.dobro(p)}')
print(f'13% desse valor é equivalente a {moeda.aumentar(p,13)}')
print(f'-10% desse valor é equivalente a {moeda.diminuir(p,10)}')
print(f'A metade do valor é {moeda.metade(p)}')