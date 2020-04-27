def aumentar(n = 0,p = 0,f = False):
    if f:
        return moeda(n + (n*(p/100)))    
    else:
        return n + (n*(p/100))

def diminuir(n = 0,p = 0,f = False):
    if f:
        return moeda(n - (n*(p/100)))
    else:
        n - (n*(p/100))

def metade(n = 0,f = False):
    if f:
        return moeda(n/2)
    else:
        return n/2

def dobro(n = 0, f = False):
    if f:
        return moeda(n*2)
    else:
        return n*2

def moeda(preço = 0, moeda = 'R$'):
    return (f'{moeda}{preço:.2f}'.replace(".",","))

def printaLinha():
    print('-'*40)

def resumo(preço = 0, a = 0, d = 0):
    printaLinha()
    print(f'Resumo do Valor'.center(40))
    printaLinha()
    print(f'Preço analisado: \t{moeda(preço):>10}')
    print(f'Dobro do preço: \t{dobro(preço,True):>10}')
    print(f'Metade do preço: \t{metade(preço,True):>10}')
    print(f'{a}% de aumento: \t{aumentar(preço,a,True):>10}')
    print(f'{d}% de redução: \t{diminuir(preço,d,True):>10}')
    printaLinha()