def leiaDinheiro():
    while True:
        n = str(input('Digite o preço: R$')).strip().replace(",",".").lower()
        if n.isalpha() or n.islower() or n == '':
            print(f'\033[0;31mERRO: \"{n}\" é um valor inválido\033[m')
        else:
            return float(n)