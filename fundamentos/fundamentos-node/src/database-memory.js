export class DatabaseMemory {
    #usuario = new Map()
    
    list(){
        this.#usuario.values()
    }
    create(usuario){
        const usuarioID = randomUUID()

        this.#usuario.set(usuarioID, usuario)
    }
    update(id, usuario){
        this.#usuario.set(id, usuario)
    }
    delete(id){
        this.#usuario.delete(id)
    }

}