from time import sleep

def notas(n):
    r = dict()
    r['total'] = len(n)
    r['maior'] = max(n)
    r['menor'] = min(n)
    r['média'] = sum(n)/len(n)
    if r['média'] >= 7:
        r['situação'] = 'Boa'
    elif r['média'] >= 5:
        r['situação'] = 'Razoável'
    else:
        r['situação'] = 'Ruim' 
    return r

def printaNota(num,result,sit=False):
    print('-'*20)
    print(f'Foram digitados {result["total"]} notas:',end=' ')
    for c in num:
        print(f'{c:.2f}',end=' ')
    print()
    print(f'A maior foi {result["maior"]}')
    print(f'E a menor foi {result["menor"]}')
    print(f'A média das notas é {result["média"]:.2f}')
    if sit:
        print(f'A situação do individuo é {result["situação"]}')

c = 'S'
num = list()
while c not in 'Nn':
    num.append(float(input('Digite a nota: ')))
    c = str(input('Você deseja adicionar mais alguma nota?[S/N]' ))
sit = bool(input('Voce deseja que seja mostrada a situação do aluno?[digite qualquer coisa caso sim] '))
resp = notas(num)
printaNota(result=resp,sit=sit,num=num)


