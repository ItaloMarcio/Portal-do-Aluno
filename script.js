document.addEventListener('DOMContentLoaded', () => {
    // 1. Tema Escuro/Claro
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se há preferência de tema salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        // Atualiza o ícone do botão
        if (savedTheme === 'dark-mode') {
            themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        } else {
            themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        }
    } else {
        // Se não houver, verifica a preferência do sistema operacional
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
            themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        }
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Salva a preferência
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        } else {
            localStorage.setItem('theme', 'light-mode');
            themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        }
    });

    // 2. Slides de Acontecimentos
    const slides = document.querySelectorAll('.slides-container img');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Avança o slide a cada 5 segundos (5000 ms)
    setInterval(nextSlide, 5000);

    // Inicializa o primeiro slide
    showSlide(currentSlide);

    // 3. Calendário (Exemplo Básico - Para um calendário completo, use uma biblioteca)
    // Para um calendário interativo completo, você pode integrar bibliotecas como FullCalendar.js
    // Exemplo de como você o inicializaria (apenas a estrutura):
    const calendarDiv = document.getElementById('calendar');
    // calendarDiv.innerHTML = '<p>Carregando calendário...</p>'; // Você pode colocar um loader

    // Se fosse usar FullCalendar.js:
    /*
    import { Calendar } from '@fullcalendar/core';
    import dayGridPlugin from '@fullcalendar/daygrid';

    const calendar = new Calendar(calendarDiv, {
        plugins: [ dayGridPlugin ],
        initialView: 'dayGridMonth',
        events: [
            // Seus eventos aqui (ex: datas de prova, matrículas, feriados)
            { title: 'Matrícula Nova', date: '2025-06-15' },
            { title: 'Início das Aulas', date: '2025-08-05' },
            { title: 'Semana de Provas', start: '2025-10-20', end: '2025-10-25' }
        ]
    });
    calendar.render();
    */
    // Para este exemplo, apenas um texto informativo
    calendarDiv.innerHTML = `
        

    `;
});