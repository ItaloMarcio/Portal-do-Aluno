// No seu arquivo Ava.html, antes do </body>, ou em um arquivo .js separado
document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle'); // Para botão
    // Ou
    // const themeToggle = document.getElementById('theme-toggle-checkbox'); // Para checkbox

    if (themeToggle) {
        // Verifica se há uma preferência de tema salva no localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            // Se for um checkbox, marque-o
            // if (themeToggle.type === 'checkbox') themeToggle.checked = true;
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            // Salva a preferência do usuário no localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
});