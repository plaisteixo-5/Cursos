ano = int(input('Digite o ano: '))
if ano%4 == 0 and ano % 100 != 0 or ano % 400 == 0:
    print('O ano informado é bissexto!')
else:
    print('O ano informado não é bissexto!')