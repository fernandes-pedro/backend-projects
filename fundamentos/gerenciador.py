def mostrarMenu():
    print("----- Menu de interacao -----")
    print("---> 1. Adicionar Tarefa <--")
    print("---> 2. Exibir Tarefas   <--")
    print("---> 3. Atualizar Tarefa <--")
    print("---> 4. Excluir Tarefa   <--")
    print("---> 5. Concluir         <--")
    print("---> 6. Sair             <--")

lista_tarefas = {"Refatorar": False, "Dormir": False, "Commitar": True}

def adicionarTarefa(tarefa):
    if tarefa in lista_tarefas: 
        print("A tarefa ja existe!")
    else:
        lista_tarefas[tarefa] = False
        print("Tarefa adicionada com sucesso!")

def exibirTarefas():
    print("As tarefas cadastradas no sistema sao: ")
    for tarefa, concluida in lista_tarefas.items(): 
        status = "concluida" if concluida else "pendente"
        print(f"{tarefa} - [{status}]")

def atualizarTarefa(buscada, tarefa_nova):
    if buscada in lista_tarefas:
        lista_tarefas[tarefa_nova] = lista_tarefas.pop(buscada)
        print("Tarefa atualizada com sucesso!")
    else:
        print('tarefa nao encontrada')

def excluirTarefa(tarefa_excluida):
    if tarefa_excluida in lista_tarefas: 
        del lista_tarefas[tarefa_excluida]
        print("Tarefa excluida com sucesso!")
    else:
        print("Tarefa nao encontrada!")

def concluirTarefa(tarefa_buscada):
    if tarefa_buscada in lista_tarefas:
        lista_tarefas[tarefa_buscada] = True
        print("Tarefa concluida com sucesso!")
    else:
        print("Tarefa nao encontrada!")

while True:
    mostrarMenu()
    try:
        opcao = int(input("Escolha uma opção de 1 a 6: "))
    except ValueError:
        print("Por favor, digite um número válido!")
        continue

    if opcao == 1:
        tarefa_adicionada = input("Digite qual tarefa a ser adicionada: ")
        adicionarTarefa(tarefa_adicionada)

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