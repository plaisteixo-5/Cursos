def arqExist(nome):
    try:
        a = open(nome,'rt')
        a.close()
    except FileNotFoundError:
        return False
    else:
        return True

def criaArq(nome):
    try:
        a = open(nome, 'wt+')
        a.close()
    except:
        print('Houve algum erro na criação do erro')
    else:
        print(f'O arquivo {nome} foi criado com sucesso')

def lerArq(nome):
    try:
        a = open(nome, 'rt')
    except:
        print('\033[0;31mFalha ao ler o arquivo\033[m')
    else:
        print('-'*42)
        print('Pessoas Cadastradas'.center(42))
        print('-'*42)
        for linha in a:
            dado = linha.split(';')
            dado[1] = dado[1].replace("\n","")
            print(f'{dado[0]:<30}{dado[1]:>3} anos')
        print(a.read())
    finally:
        a.close()

def cadastrar(arq, nome = 'Desconhecido', idade = 0):
    try:
        a = open(arq,'at')
    except:
        print('Houve um erro na abertura do arquivo!')
    else:
        try:
            a.write(f'{nome};{idade}\n')
        except:
            print('Houve um erro na hora de escrever os dados!')
        else:
            print('O nome foi adicionado')
    finally:
        a.close()