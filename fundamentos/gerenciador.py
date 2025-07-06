def mostrarMenu():
    print("----- Menu de interacao -----")
    print("---> 1. Adicionar Tarefa <--")
    print("---> 2. Atualizar Tarefa <--")
    print("---> 3. Excluir Tarefa   <--")
    print("---> 4. Concluir         <--")
    print("---> 5. Sair             <--")

lista_tarefas = []

def adicionarTarefa(tarefa):
    lista_tarefas.append(tarefa)
    print("Tarefa adicionada com sucesso!")

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
    opcao = input("Escolha uma opcao de 1 a 5:")
    if opcao == "1":
        tarefa = input("Digite qual tarefa a ser adicionada: ")
        adicionarTarefa(tarefa)

    elif opcao == "2":
        buscada = input("Digite qual tarefa a ser atualizada: ")
        tarefa_nova = ("Digita o novo nome da tarefa: ")
        atualizarTarefa(buscada, tarefa_nova)

    elif opcao == "3": 
        tarefa = input("Digite qual tarefa a ser excluida: ")
        excluirTarefa()

    elif opcao == "4":
        concluirTarefa()
        
    elif opcao == "5":
        print("Saindo...")
        break
    else:
        print("Opcao invalida!")