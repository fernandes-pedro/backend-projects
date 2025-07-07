def mostrarMenu():
    print("----- Menu de interacao -----")
    print("---> 1. Adicionar Tarefa <--")
    print("---> 2. Exibir Tarefas   <--")
    print("---> 3. Atualizar Tarefa <--")
    print("---> 4. Excluir Tarefa   <--")
    print("---> 5. Concluir         <--")
    print("---> 6. Sair             <--")

lista_tarefas = []

def adicionarTarefa(tarefa):
    lista_tarefas.append(tarefa)
    print("Tarefa adicionada com sucesso!")

def exibirTarefas():
    print("As tarefas cadastradas no sistema sao: ")
    for tarefa in lista_tarefas:
        print(tarefa)

def atualizarTarefa(buscada, tarefa_nova):
    if buscada in lista_tarefas:
        index = lista_tarefas.index(buscada)
        lista_tarefas[index] = tarefa_nova
        print("Tarefa atualizada com sucesso!")
    else:
        print('tarefa nao encontrada')

def excluirTarefa():
    lista_tarefas.pop()
    print("Tarefa excluida com sucesso!")

def concluirTarefa():
    print(lista_tarefas)
    print("Tarefa concluida com sucesso!")

while True:
    mostrarMenu()
    opcao = int(input("Escolha uma opcao de 1 a 6: "))

    if opcao == 1:
        tarefa = input("Digite qual tarefa a ser adicionada: ")
        adicionarTarefa(tarefa)

    elif opcao == 2:
        exibirTarefas()

    elif opcao == 3:
        buscada = input("Digite qual tarefa a ser atualizada: ")
        tarefa_nova = ("Digita o novo nome da tarefa: ")
        atualizarTarefa(buscada, tarefa_nova)

    elif opcao == 4: 
        tarefa = input("Digite qual tarefa a ser excluida: ")
        excluirTarefa()

    elif opcao == 5:
        concluirTarefa()
        
    elif opcao == 6:
        print("Saindo...")
        break
    else:
        print("Opcao invalida!")