import urllib.request

try:
    urllib.request.urlopen("http://pudim.com.br/")
    
except:
    print('\033[0;31mO site pudim não está ativo no momento =(\033[m')
else:
    print('\033[1;32mO site pudim está ativo no momento =D\033[m')
    