// Declarando as variáveis

const form =document.getElementById("form")
const nome =document.getElementById("nome")
const email =document.getElementById("email")
const senha =document.getElementById("senha")

// Evento que vai pegar o que acontecer no formulário

form.addEventListener('submit',(e)=>{
    // Previne qualquer alteração no formulário
    e.preventDefault()

    // Chamar a função que vai checar os campos
    checarCampos()
})

// Função checar campos
function checarCampos(){
    // Declarando as variáveis
    // O metódo trim remove os espaços em branco no início e no fim do texto
    const nomeValor = nome.value.trim() 
    const emailValor = email.value.trim() 
    const senhaValor = senha.value.trim() 

    // Se o campo "nome" estiver vazio

    if(nomeValor === ""){
        validarErro(nome,"Preencha o campo nome")

    }
    else{
        validarSucesso(nome)
    }

    // Se o campo "email" estiver vazio

    if(emailValor === ""){
        validarErro(email, "Preencha o campo email")
    }
    else{
        validarSucesso(email)
    }

    //Se o campo senha estiver vazio

    if(senhaValor === ""){
        validarErro(senha, "Preencha o campo senha")
    }
    else if(senhaValor.lenght < 8)
    {
        validarErro(senha,"A senha deve ter mais que 8 caracteres")
    }else{
        validarSucesso(senha)
    }

}

// Validar error

    function validarErro(input,message){
        // Retorna para o elemento pai
        const controle = input.parentElement;
        // Pega o primeiro elemento small que o seletor encontrar
        const small = controle.querySelector('small')
        // Pega a mensagem no campo em caso de erro
        small.innerText = message
        // Pega as configurações de CSS da classe controle e error
        controle.className ="controle error"

    }


// Validar sucesso