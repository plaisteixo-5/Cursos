def ficha(nome='jogador',gols=0):
    '''
    nome: Nome do jogador;
    gols: Quantidade de gols marcada pelo jogador.
    return: nada;
    ->As duas váriáveis são opcionais =)
    '''
    print(f'O {nome} marcou {gols} gols')

nJ = str(input('Digite o nome do jogador: '))
nG = str(input('Quantos gols ele marcou? '))
if nG.isnumeric():
    nG = int(nG)
else:
    nG = 0
if nJ.strip() == '':
    ficha(gols=nG)
else:
    ficha(nJ,nG)