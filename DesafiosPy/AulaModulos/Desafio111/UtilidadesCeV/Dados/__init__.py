def leiaDinheiro():
    while True:
        n = str(input('Digite o preço: R$')).strip()
        if n.isnumeric():
            return float(n)
        else:
            print(f'ERRO: \"{n}\" é um valor inválido')