function validaDados(form) {

    var nome = document.formulario.nome.value;
    var email = document.formulario.email.value;
    var dataNascimento = document.formulario.data.value;

    /*---- Validação do nome -------*/
    if (nome == "" ) {

        alert("Preencha o campo nome!" );
        document.formulario.nome.focus();
        return false;
    }else{
        document.formulario.nome.blur();
    }

    if ( nome.length < 15) {
        
        alert("O nome tem que ter mais do que 15 caracter!")
        document.formulario.nome.focus();
        return false;
    }else{
        document.formulario.nome.blur();
    }

    if (isNaN(nome) == false) {

        alert("Digite seu nome e não números!");
        document.formulario.nome.focus();
        return false;
        
    }else{
        document.formulario.nome.blur();
    }

    /*---- Validação do email -------*/

    erEmail = /^[\w!#$%&'*+\/=?^`{|}~-]+(\.[\w!#$%&'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/; 

    if(email == ""){
  
        alert("Preencha o campo email!"); 
        document.formulario.email.focus();
        return false;
    }else{
        document.formulario.email.blur();
    }
    
    if(!email.match(erEmail)){
  
        alert("Preencha o campo email corretamente!"); 
        document.formulario.email.focus();
        return false;
    }else{
        document.formulario.email.blur();
    }

    if (email.length < 10) {

        alert("O email não pode ter menos de 10 caracteres!"); 
        document.formulario.email.focus();
        return false;       
    }else{
        document.formulario.email.blur();
    }

     /*---- Validação do Data de nascimento -------*/
    if (dataNascimento == "") {
        alert("Preencha a data!");
        document.formulario.data.focus();
        return false;
    }
    
    if (dataNascimento.length < 10) {
        alert("Preencha a data corretamente!");
        document.formulario.data.focus();
        return false;
    }

    /*---- Validação do sexo -------*/
    if (!document.formulario.sexo.value == 1 ||  !document.formulario.sexo.value == 2) {
        alert("Selecione o seu sexo");        
        return false;
    }

    /*---- Validação do Estado Civil---*/
    if (!document.formulario.estadocivil.value == 1 ||  !document.formulario.estadocivil.value == 2 || !document.formulario.estadocivil.value == 3) {
        alert("Selecione o seu estado civil");
        
        return false;
    }

    if (document.formulario.estadocivil.value == 1) {
       const AnoAtual = new Date();
       const ano = AnoAtual.getFullYear();
       anoNascimento = dataNascimento.substr(6,4);
       idade = ano - anoNascimento;
      if (idade < 15) {
        alert("Solteiros somente maiores de 15 anos!");
        return false;
      }    
    }

    if (document.formulario.analise.checked == false && document.formulario.banco.checked == false && 
        document.formulario.desenv.checked == false && document.formulario.engenharia.checked == false &&
        document.formulario.redes.checked == false ) {

        alert("Selecione pelo menos uma áre de interesse!");
        return false;
    } 

   alert("Dados enviados com sucesso!");
    
    
}

function mascaraData(v){
    v.value=v.value.replace(/\D/g,""); 
    v.value=v.value.replace(/^(\d{2})(\d)/,"$1/$2"); 
    v.value=v.value.replace(/(\d{2})(\d)/,"$1/$2");
}

