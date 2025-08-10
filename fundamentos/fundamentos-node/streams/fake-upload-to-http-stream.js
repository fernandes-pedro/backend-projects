import {Readable} from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1

    _read(){
        const i = this.index++

        setTimeout(() =>{ //setando tempo de intervalo entre as execucoes 
            if(i>100){
                this.push(null) //caso passe 100, envia nulo
            } else{
                const buf = Buffer.from(String(i)) //conversao para buffer apos conversao para string
                this.push(buf)
            }
        }, 1000)
    }
}

fetch('http://localhost:3334', {
    method:'POST',
    body: new OneToHundredStream(),
    duplex: 'half', // fix de erro, o undici, biblioteca interna do node precisa dessa declaracao explicita
})