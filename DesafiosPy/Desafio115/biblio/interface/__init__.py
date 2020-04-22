def leiaint(msg):
    while True:
        try:
            valor = int(input(msg))    
        except:
            print('\033[0;31mERRO. Por favor, digite um valor inteiro válido.\033[m')
        else:
            break
    return valor

def linha(tamanho = 42):
    print('-'*tamanho)

def cabeçalho(txt,t = 42):
    linha()
    print(txt.center(t))
    linha()

def menu(lista):
    cabeçalho('Menu Principal')
    c = 1
    for item in lista:
        print(f'\033[33m{c}\033[m - \033[34m{item}\033[m')
        c += 1
    linha()
    return leiaint('\033[32mSua opção: \033[m')