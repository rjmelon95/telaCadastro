const formulario = document.querySelector("form");
 const Inome = document.querySelector(".nome");
 const Iemail = document.querySelector(".email");
 const Ifone = document.querySelector(".fone");
 const Isenha = document.querySelector(".senha");


function cadastrar () {

    fetch("http://localhost:8080/cadastrar",
        {
            headers:{

                'Accept': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                nome: Inome.value,
                email: Iemail.value,
                fone: Ifone.value,
                senha: Isenha.value


            })
        })
        .then(function(res){ console.log(res)})
        .catch(function(res){console.log(res)})

        

}

function limpar (){
    nome: Inome.value = "";
    email: Iemail.value = "";
    fone: Ifone.value = "";
    senha: Isenha.value = "";

};


 formulario.addEventListener('submit', function(Event){
  Event.preventDefault();

 cadastrar();
 limpar();





 });


 

   
    







   
