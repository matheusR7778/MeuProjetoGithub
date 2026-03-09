  const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("main-nav");

    function toggleMenu() {
        navMenu.classList.toggle('active');
        hamburgerBtn.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
    }
    
    hamburgerBtn.addEventListener("click", toggleMenu);
    
    // Fecha o menu se o usuário clicar em um link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if(navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });