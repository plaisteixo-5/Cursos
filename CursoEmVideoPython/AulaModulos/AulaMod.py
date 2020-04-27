from Uteis import números

num = int(input('Digite um valor: '))
fat = números.fatorial(num)
print(f'O fatorial de {num} é {fat}')
print(f'O dobro é {números.dobro(num)} e o triplo é {números.triplo(num)}')