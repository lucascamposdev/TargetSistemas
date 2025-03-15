# Rodar o código no Terminal e não em Output para que as interações de input() funcionem

'''
    # Explicação:
    -------------

    Sequência Fibonacci é uma série de números em que 
    cada número após os dois primeiros (0, 1) 
    é a soma dos dois números anteriores (1, 2, 3, 5, 8, 13, 21...)

    1) Recebe um input do usuário utilizando o método input() 

    2) is_fibonacci:
        Inicia os dois primeiros números da sequência fibonacci (0, 1)
        com a atribuição das variáves (a,b = 0,1)

        while a <= num:
            - Vamos montando a sequência fibonacci enquanto o valor enviado for maior que (a)

        if a == num:
            - Se o número enviado for igual ao valor de (a) significa que ele está na sequência
        
        a, b = b, a + b:
            - A cada iteração vamos passando o valor de (b) que está á frente, para (a)
            - (b) representa sempre o próximo número da sequência, portanto, a cada iteração
            ele recebe o valor de (a) que está atrás + o valor dele próprio
            - Isso faz com que o próximo número da sequência seja sempre a soma 
            dos dois anteriores

        não pertence:
            - Se a sequência chegou ao valor enviado e ele não foi interrompido pela verificação
            if a == num, quer dizer que ele não estava na sequência, portanto, não pertence
'''

def is_fibonacci(num):
    a, b = 0, 1

    while a <= num:
        if a == num:
            return f"O número {num} pertence à sequência de Fibonacci."
        a, b = b, a + b

    return f"O número {num} NÃO pertence à sequência de Fibonacci."

numero = int(input("Digite um número para verificar se está na sequência de Fibonacci: "))

print(is_fibonacci(numero))
