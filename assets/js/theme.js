document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Cargar preferencia guardada o detectar preferencia del sistema
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Aplicar tema inicial
  if (savedTheme) {
    html.classList.toggle('dark', savedTheme === 'dark');
  } else {
    html.classList.toggle('dark', systemPrefersDark);
    localStorage.setItem('theme', systemPrefersDark ? 'dark' : 'light');
  }
  
  // Configurar el botón de alternancia
  themeToggle.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Forzar recarga de estilos (solución para algunos navegadores)
    const href = document.querySelector('link[rel="stylesheet"]').href;
    document.querySelector('link[rel="stylesheet"]').href = '';
    document.querySelector('link[rel="stylesheet"]').href = href;
  });
  
  // Escuchar cambios en la preferencia del sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      html.classList.toggle('dark', e.matches);
    }
  });
});