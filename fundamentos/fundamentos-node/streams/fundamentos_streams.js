//Netflix, Spotify

//Importacao de informacoes via arquivos (CSV, XML)
// 1GB (1.000.000 de linhas)
//POST /upload import.csv

// O conceito de streams se aplica a leitura de arquivos, fazendo com que, a cada leitura (ex. 10mb/s) sejam lidos os dados e inserindos no BD 
//Readable Streams / Writable Streams

//Criacao de readable stream
// process.stdin
//     .pipe(process.stdout)

import {Readable, Writable, Transform} from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1
    _read(){
        const i = this.index++

        setTimeout(() =>{ //setando tempo de intervalo entre as execucoes 
            if(i>100){
            this.push(null) //caso passe 100, envia nulo
            }
            else{
                const buff = Buffer.from(String(i)) //conversao para buffer apos conversao para string
                this.push(buff)
            }
        }, 1000)
    }
}
class InverseNumberStream extends Transform{
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1
        callback(null, Buffer.from(String(transformed))) // retorno de null para falha e transformed para exito
    }
}
class MultiplyByTenStream extends Writable{
    _write(chunk, encoding, callback){ //chunk = pedaco lido da leitura - encoding = codificadao da informacao - callback = retorno de informacao (execucao)
        console.log(Number(chunk.toString())*10) 
        callback() // retornando apos a execucao, permitindo a continuacao no if else do objeto OneToHundredStream
    }
}

new OneToHundredStream()
    // saida dos dados responde a ordem, nesse caso primeiro inverte-se o sinal do numero para somente entao multiplica-lo por 10 (saida = -10, -20, etc..)
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream())

    

