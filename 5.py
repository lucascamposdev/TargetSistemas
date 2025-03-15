# Rodar o código no Terminal e não em Output para que as interações de input() funcionem

'''
    # Explicação:
    -------------

    1) Recebe um input do usuário utilizando o método input()

    2) invert_string(): 
        - Inicia uma nova string vazia ''
        - Itera sobre a string recebida
        - Adiciona o valor de cada [index] no início da nova string 
        - Isso faz com que os valores sejam "empurrados" para o final, invertendo a string
'''

def invert_string(s):
    inverted_str = ''
    
    for i in range(len(s)):
        inverted_str = s[i] + inverted_str 
    
    return inverted_str

input_string = input("Digite uma string: ")
inverted_string = invert_string(input_string)

print(f"String invertida: {inverted_string}")
