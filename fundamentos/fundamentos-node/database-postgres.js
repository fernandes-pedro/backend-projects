import { randomUUID } from 'crypto'
import sql from './db.js'

export class DatabasePostgres {
    
    async list(search = ''){
        let usuarios
        if (search){
            usuarios = await sql`
            SELECT * 
            FROM usuarios
            WHERE nome ILIKE ${'%' + search + '%'}
            `;

        } else  {
            usuarios = await sql `select * from usuarios `
        }
        return usuarios
    }


    async create(usuario){
        const {nome, idade, nome_da_mae} = usuario
        await sql` insert into usuarios(nome, idade, nome_da_mae) 
        VALUES (${nome}, ${idade}, ${nome_da_mae})`
    }


    update(id, usuario){
        
    }


    delete(id){
        
    }
    
}