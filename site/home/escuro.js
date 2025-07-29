function aplicarModoEscuro(ativar) {
  if (ativar) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const modoEscuroAtivado = localStorage.getItem('modoEscuro') === 'true';
  aplicarModoEscuro(modoEscuroAtivado);

  const toggle = document.getElementById('modoEscuroToggle');
  if (toggle) {
    toggle.checked = modoEscuroAtivado;

    toggle.addEventListener('change', function () {
      localStorage.setItem('modoEscuro', this.checked);
      aplicarModoEscuro(this.checked);
    });
  }
});
