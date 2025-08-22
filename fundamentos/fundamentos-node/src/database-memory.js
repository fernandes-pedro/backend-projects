import { randomUUID } from 'crypto'

export class DatabaseMemory {
    #usuario = new Map()
    
    list(){
        return Array.from(this.#usuario.entries()).map((usuarioArray) => {
            const id = usuarioArray[0]
            const data = usuarioArray[1]
            return {
                id, 
                ...data,
            }
        })
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