 
    let boxVisivel = false;
    let box = null;

    function aba() {
      const container = document.getElementById('boxes-container');

      if (!boxVisivel) {
        box = document.createElement('div');
        box.className = 'aba_box';
        box.innerHTML = `
          <div class="menu-item ativo">
            <img src="https://img.icons8.com/ios-filled/50/user.png" alt="Conta"><a href="conta.html"> Conta</a>
           
          </div>
          <div class="menu-item">
            <img src="https://img.icons8.com/ios-filled/50/settings.png" alt="Configuracoes"><a href="confi.hmtl">Configurações</a>
            
          </div>
          <div class="menu-item">
            <img src="https://img.icons8.com/ios-filled/50/help.png" alt="Ajuda"><a href="perguntasfrequentes.html"> Ajuda</a>
            
          </div>
        `;
        container.appendChild(box);
        boxVisivel = true;
      } else {
        if (box) {
          container.removeChild(box);
          box = null;
        }
        boxVisivel = false;
      }
    }
 
const messageButton = document.getElementById('messageButton');

const chatBoxContainer = document.getElementById('chatBoxContainer');

function criarChatBoxRF() {
      const chatBox = document.createElement('div');
      chatBox.classList.add('chat_box');
      chatBox.id = 'mainChatBox';
      chatBox.innerHTML =
          `<div class="chat_header">
              <span>Chat com Reciclafácil</span>
              <button class="close_btn">&times;</button>
          </div>
          <div class="chat_messages">
              <p>Olá! Como posso ajudar?</p>
          </div>
          <div class="chat_input">
              <input type="text" placeholder="Digite sua mensagem..." class="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <button class="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Enviar</button>
          </div>`;
      chatBoxContainer.appendChild(chatBox);
      mainChatBox = chatBox;
      const closeBtn = chatBox.querySelector('.close_btn');
      if (closeBtn) {
          closeBtn.addEventListener('click', toggleChatBox);
          console.log('Botão "x" encontrado e evento de clique anexado.');
      } else {
          console.error('ERRO: Botão ".close_btn" não encontrado dentro da chat_box. Verifique o HTML injetado.');
      }
  }
  function toggleChatBox() {
      if (!mainChatBox) {
          createChatBox();
      }
      mainChatBox.classList.toggle('hidden');
  }
  if (floatingChatButton) {
      floatingChatButton.addEventListener('click', toggleChatBox);
  }
  document.addEventListener('DOMContentLoaded', () => {
      createChatBox();
  });

  function criarChatBoxPL() {
      const chatBox = document.createElement('div');
      chatBox.classList.add('chat_box');
      chatBox.id = 'mainChatBox';
      chatBox.innerHTML =
          `<div class="chat_header">
              <span>Chat com Planeta Limpo</span>
              <button class="close_btn">&times;</button>
          </div>
          <div class="chat_messages">
              <p>Olá! Como posso ajudar?</p>
          </div>
          <div class="chat_input">
              <input type="text" placeholder="Digite sua mensagem..." class="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <button class="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Enviar</button>
          </div>`;
      chatBoxContainer.appendChild(chatBox);
      mainChatBox = chatBox;
      const closeBtn = chatBox.querySelector('.close_btn');
      if (closeBtn) {
          closeBtn.addEventListener('click', toggleChatBox);
          console.log('Botão "x" encontrado e evento de clique anexado.');
      } else {
          console.error('ERRO: Botão ".close_btn" não encontrado dentro da chat_box. Verifique o HTML injetado.');
      }
  }
  function toggleChatBox() {
      if (!mainChatBox) {
          createChatBox();
      }
      mainChatBox.classList.toggle('hidden');
  }
  if (floatingChatButton) {
      floatingChatButton.addEventListener('click', toggleChatBox);
  }
  document.addEventListener('DOMContentLoaded', () => {
      createChatBox();
  });

  function criarChatBoxPN() {
      const chatBox = document.createElement('div');
      chatBox.classList.add('chat_box');
      chatBox.id = 'mainChatBox';
      chatBox.innerHTML =
          `<div class="chat_header">
              <span>Chat com Planeta Novo</span>
              <button class="close_btn">&times;</button>
          </div>
          <div class="chat_messages">
              <p>Olá! Como posso ajudar?</p>
          </div>
          <div class="chat_input">
              <input type="text" placeholder="Digite sua mensagem..." class="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <button class="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Enviar</button>
          </div>`;
      chatBoxContainer.appendChild(chatBox);
      mainChatBox = chatBox;
      const closeBtn = chatBox.querySelector('.close_btn');
      if (closeBtn) {
          closeBtn.addEventListener('click', toggleChatBox);
          console.log('Botão "x" encontrado e evento de clique anexado.');
      } else {
          console.error('ERRO: Botão ".close_btn" não encontrado dentro da chat_box. Verifique o HTML injetado.');
      }
  }
  function toggleChatBox() {
      if (!mainChatBox) {
          createChatBox();
      }
      mainChatBox.classList.toggle('hidden');
  }
  if (floatingChatButton) {
      floatingChatButton.addEventListener('click', toggleChatBox);
  }
  document.addEventListener('DOMContentLoaded', () => {
      createChatBox();
  });

  function criarChatBoxVvn() {
      const chatBox = document.createElement('div');
      chatBox.classList.add('chat_box');
      chatBox.id = 'mainChatBox';
      chatBox.innerHTML =
          `<div class="chat_header">
              <span>Chat com Recicla vida</span>
              <button class="close_btn">&times;</button>
          </div>
          <div class="chat_messages">
              <p>Olá! Como posso ajudar?</p>
          </div>
          <div class="chat_input">
              <input type="text" placeholder="Digite sua mensagem..." class="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <button class="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Enviar</button>
          </div>`;
      chatBoxContainer.appendChild(chatBox);
      mainChatBox = chatBox;
      const closeBtn = chatBox.querySelector('.close_btn');
      if (closeBtn) {
          closeBtn.addEventListener('click', toggleChatBox);
          console.log('Botão "x" encontrado e evento de clique anexado.');
      } else {
          console.error('ERRO: Botão ".close_btn" não encontrado dentro da chat_box. Verifique o HTML injetado.');
      }
  }
  function toggleChatBox() {
      if (!mainChatBox) {
          createChatBox();
      }
      mainChatBox.classList.toggle('hidden');
  }
  if (floatingChatButton) {
      floatingChatButton.addEventListener('click', toggleChatBox);
  }
  document.addEventListener('DOMContentLoaded', () => {
      createChatBox();
  });

  function criarChatBoxRM() {
      const chatBox = document.createElement('div');
      chatBox.classList.add('chat_box');
      chatBox.id = 'mainChatBox';
      chatBox.innerHTML =
          `<div class="chat_header">
              <span>Chat com Recicla mais</span>
              <button class="close_btn">&times;</button>
          </div>
          <div class="chat_messages">
              <p>Olá! Como posso ajudar?</p>
          </div>
          <div class="chat_input">
              <input type="text" placeholder="Digite sua mensagem..." class="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <button class="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Enviar</button>
          </div>`;
      chatBoxContainer.appendChild(chatBox);
      mainChatBox = chatBox;
      const closeBtn = chatBox.querySelector('.close_btn');
      if (closeBtn) {
          closeBtn.addEventListener('click', toggleChatBox);
          console.log('Botão "x" encontrado e evento de clique anexado.');
      } else {
          console.error('ERRO: Botão ".close_btn" não encontrado dentro da chat_box. Verifique o HTML injetado.');
      }
  }
  function toggleChatBox() {
      if (!mainChatBox) {
          createChatBox();
      }
      mainChatBox.classList.toggle('hidden');
  }
  if (floatingChatButton) {
      floatingChatButton.addEventListener('click', toggleChatBox);
  }
  document.addEventListener('DOMContentLoaded', () => {
      createChatBox();
  });

  function criarChatBoxVN() {
      const chatBox = document.createElement('div');
      chatBox.classList.add('chat_box');
      chatBox.id = 'mainChatBox';
      chatBox.innerHTML =
          `<div class="chat_header">
              <span>Chat com Verde Novo</span>
              <button class="close_btn">&times;</button>
          </div>
          <div class="chat_messages">
              <p>Olá! Como posso ajudar?</p>
          </div>
          <div class="chat_input">
              <input type="text" placeholder="Digite sua mensagem..." class="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <button class="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Enviar</button>
          </div>`;
      chatBoxContainer.appendChild(chatBox);
      mainChatBox = chatBox;
      const closeBtn = chatBox.querySelector('.close_btn');
      if (closeBtn) {
          closeBtn.addEventListener('click', toggleChatBox);
          console.log('Botão "x" encontrado e evento de clique anexado.');
      } else {
          console.error('ERRO: Botão ".close_btn" não encontrado dentro da chat_box. Verifique o HTML injetado.');
      }
  }
  function toggleChatBox() {
      if (!mainChatBox) {
          createChatBox();
      }
      mainChatBox.classList.toggle('hidden');
  }
  if (floatingChatButton) {
      floatingChatButton.addEventListener('click', toggleChatBox);
  }
  document.addEventListener('DOMContentLoaded', () => {
      createChatBox();
  });

  function criarChatBoxVNN() {
      const chatBox = document.createElement('div');
      chatBox.classList.add('chat_box');
      chatBox.id = 'mainChatBox';
      chatBox.innerHTML =
          `<div class="chat_header">
              <span>Chat com Recicla Vida</span>
              <button class="close_btn">&times;</button>
          </div>
          <div class="chat_messages">
              <p>Olá! Como posso ajudar?</p>
          </div>
          <div class="chat_input">
              <input type="text" placeholder="Digite sua mensagem..." class="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <button class="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Enviar</button>
          </div>`;
      chatBoxContainer.appendChild(chatBox);
      mainChatBox = chatBox;
      const closeBtn = chatBox.querySelector('.close_btn');
      if (closeBtn) {
          closeBtn.addEventListener('click', toggleChatBox);
          console.log('Botão "x" encontrado e evento de clique anexado.');
      } else {
          console.error('ERRO: Botão ".close_btn" não encontrado dentro da chat_box. Verifique o HTML injetado.');
      }
  }
  function toggleChatBox() {
      if (!mainChatBox) {
          createChatBox();
      }
      mainChatBox.classList.toggle('hidden');
  }
  if (floatingChatButton) {
      floatingChatButton.addEventListener('click', toggleChatBox);
  }
  document.addEventListener('DOMContentLoaded', () => {
      createChatBox();
  });

  function criarChatBoxVN() {
      const chatBox = document.createElement('div');
      chatBox.classList.add('chat_box');
      chatBox.id = 'mainChatBox';
      chatBox.innerHTML =
          `<div class="chat_header">
              <span>Chat com Verde Novo</span>
              <button class="close_btn">&times;</button>
          </div>
          <div class="chat_messages">
              <p>Olá! Como posso ajudar?</p>
          </div>
          <div class="chat_input">
              <input type="text" placeholder="Digite sua mensagem..." class="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <button class="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Enviar</button>
          </div>`;
      chatBoxContainer.appendChild(chatBox);
      mainChatBox = chatBox;
      const closeBtn = chatBox.querySelector('.close_btn');
      if (closeBtn) {
          closeBtn.addEventListener('click', toggleChatBox);
          console.log('Botão "x" encontrado e evento de clique anexado.');
      } else {
          console.error('ERRO: Botão ".close_btn" não encontrado dentro da chat_box. Verifique o HTML injetado.');
      }
  }
  function toggleChatBox() {
      if (!mainChatBox) {
          createChatBox();
      }
      mainChatBox.classList.toggle('hidden');
  }
  if (floatingChatButton) {
      floatingChatButton.addEventListener('click', toggleChatBox);
  }
  document.addEventListener('DOMContentLoaded', () => {
      createChatBox();
  });
  function criarChatBoxER() {
      const chatBox = document.createElement('div');
      chatBox.classList.add('chat_box');
      chatBox.id = 'mainChatBox';
      chatBox.innerHTML =
          `<div class="chat_header">
              <span>Chat com Eco revolução</span>
              <button class="close_btn">&times;</button>
          </div>
          <div class="chat_messages">
              <p>Olá! Como posso ajudar?</p>
          </div>
          <div class="chat_input">
              <input type="text" placeholder="Digite sua mensagem..." class="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <button class="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Enviar</button>
          </div>`;
      chatBoxContainer.appendChild(chatBox);
      mainChatBox = chatBox;
      const closeBtn = chatBox.querySelector('.close_btn');
      if (closeBtn) {
          closeBtn.addEventListener('click', toggleChatBox);
          console.log('Botão "x" encontrado e evento de clique anexado.');
      } else {
          console.error('ERRO: Botão ".close_btn" não encontrado dentro da chat_box. Verifique o HTML injetado.');
      }
  }
  function toggleChatBox() {
      if (!mainChatBox) {
          createChatBox();
      }
      mainChatBox.classList.toggle('hidden');
  }
  if (floatingChatButton) {
      floatingChatButton.addEventListener('click', toggleChatBox);
  }
  document.addEventListener('DOMContentLoaded', () => {
      createChatBox();
  });