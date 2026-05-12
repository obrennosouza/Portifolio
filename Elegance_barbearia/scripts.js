     // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.backdropFilter = 'none';
            }
        });

        const modal = document.getElementById("meuPopUp");
    const btnFechar = document.querySelector(".fechar");

    // Seleciona todas as fotos com a classe foto-barbeiros
    const fotos = document.querySelectorAll(".foto-barbeiros");

    fotos.forEach(foto => {
        foto.onclick = function() {
            agenda.style.display = "block";
        }
    });

    // Fecha ao clicar no X
    btnFechar.onclick = function() {
         agenda.style.display = "none";
    }

    // Fecha ao clicar fora da janela branca
    window.onclick = function(event) {
        if (event.target == modal) {
             agenda.style.display = "none";
        }
    }
