import  sql  from './db.js'

sql`
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,      -- chave primária auto-incremento
    nome VARCHAR(100) NOT NULL, -- nome do usuário
    idade INT NOT NULL,         -- idade do usuário
    nome_da_mae VARCHAR(100)    -- nome da mãe do usuário
);
`.then(()=>{
    console.log('Tabela criada!')
})
