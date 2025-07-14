let meta = {
    value: "entrar no shape",
    checked: false,
    isChecked: (info) => {
        console.log(info)
    }
}
meta.isChecked(meta.value)
// printando o valor da meta atraves de um metodo (funcao dentro de uma variavel ou objeto)
meta.value = ("consertar o notebook")
//alterando o valor (manipulacao de objeto)
meta.isChecked(meta.value)
//printando novo valor atribuido a variavel