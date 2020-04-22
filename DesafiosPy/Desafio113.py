def leiaint(msg):
    while True:
        try:
            valor = int(input(msg))    
        except:
            print('\033[0;31mERRO. Por favor, digite um valor inteiro válido.\033[m')
        else:
            break
    return valor

def leiafloat(msg):
    while True:
        try:
            valor = float(input(msg))
        except KeyboardInterrupt:
            print('\033[1;32mO usuário decidiu não digitar o valor!\033[m')
            valor = 0
            break
        except:
            print('\033[0;31mERRO. Por favor, digite um valor real válido.\033[m')
        else:
            break
    return valor
    

i = leiaint('Digite um número inteiro: ')
f = leiafloat('Digite um número real: ')
print(f'Você digitou os números {i} e {f:.2f}')