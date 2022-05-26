var email = "";
var senha = ""; 
    
function verificar() {
    msg_erro.innerHTML = ""
    msg_erro.style.display = "none";  

    var email = ipt_email.value;
    var senha = ipt_senha.value;

    if(email == "" || senha == ""){
        msg_erro.innerHTML = "Por favor, preencha todos os campos";
        msg_erro.style.display = "block";

    }
    else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        msg_erro.innerHTML = "email inválido, não contém @ ou .com"
        msg_erro.style.display = "block"; 

    }
    else if (email == "lumen@email.com" && senha == "lumen") {
        alert("Login realizado com sucesso");
        window.location.href = "dashboards/dashboardGeral.html";
    }
    else{
        msg_erro.style.display = "block"; 
        msg_erro.innerHTML = "Email ou senha inválidos";
    }   
}