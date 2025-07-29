function showMessage(message) {
            console.log("showMessage: Exibindo mensagem:", message); // Adicionado para depuração
            document.getElementById('modal-message').innerText = message; // Define o texto da mensagem
            document.getElementById('message-modal').style.display = 'flex'; // Mostra o modal
        }

        /**
         
         * @returns {boolean} - Retorna `false` para impedir o envio padrão do formulário.
         */
        function login() {
            console.log("login() foi chamada!"); 

          
            const usuario = document.getElementById('usuario').value;
            const senha = document.getElementById('senha').value;

       
            console.log("Usuário digitado (valor puro):", usuario);
            console.log("Senha digitada (valor puro):", senha);

          
            if (usuario === 'admin@fortes.com.br' && senha === '123456') {
                console.log("Credenciais corretas. Redirecionando para home.html...");
            
                window.location.href = "./site/home/home.html";
                return false; 
            } else {
                console.log("Credenciais incorretas. Exibindo modal de erro.");
                
                showMessage('Usuário ou senha incorretos');
                return false; 
            }
        }