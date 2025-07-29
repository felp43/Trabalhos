const foto = document.getElementById('fotoUsuario');
const upload = document.getElementById('uploadFoto');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const atuacao = document.getElementById('atuacao');
const descricao = document.getElementById('descricao');
const btnSim = document.querySelector('.sim');
const btnNao = document.querySelector('.nao');

// Carregar dados salvos
window.onload = () => {
    const dados = JSON.parse(localStorage.getItem('usuario'));
    if (dados) {
        nome.value = dados.nome || '';
        email.value = dados.email || '';
        telefone.value = dados.telefone || '';
        atuacao.value = dados.atuacao || '';
        descricao.value = dados.descricao || '';
        if (dados.foto) {
            foto.src = dados.foto;
        }
    }
};

// Salvar imagem como base64
upload.addEventListener('change', function () {
    const reader = new FileReader();
    reader.onload = function () {
        foto.src = reader.result;
    };
    if (this.files[0]) {
        reader.readAsDataURL(this.files[0]);
    }
});

// Botão "Sim" = salvar dados
btnSim.addEventListener('click', () => {
    const dados = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        atuacao: atuacao.value,
        descricao: descricao.value,
        foto: foto.src
    };
    localStorage.setItem('usuario', JSON.stringify(dados));
    alert("Informações salvas com sucesso!");
});

// Botão "Não" = descartar alterações e recarregar
btnNao.addEventListener('click', () => {
    window.location.reload();
});
document.querySelector('.apagar').addEventListener('click', () => {
    if (confirm("Tem certeza que deseja apagar sua conta?")) {
        localStorage.removeItem('usuario');
        window.location.reload();
    }
});
