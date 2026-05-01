window.addEventListener("scroll", () => {
    // ... (sua lógica do header continua igual aqui em cima)

    const track = document.querySelector('.scroll-track');
    const wrapper = document.querySelector('.horizontal-wrapper');

    if (track && wrapper) {
        const offsetTop = wrapper.offsetTop;
        const wrapperHeight = wrapper.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Calculamos a distância total que o usuário pode rolar
        const scrollDistance = wrapperHeight - windowHeight;
        const currentScroll = scrollY - offsetTop;

        if (scrollY < offsetTop) {
            // Se o usuário subiu além da sessão, reseta o card para o início
            track.style.transform = `translate3d(0, 0, 0)`;
        } 
        else if (scrollY > (offsetTop + scrollDistance)) {
            // Se passou da sessão, trava no final
            const maxMove = track.scrollWidth - window.innerWidth;
            track.style.transform = `translate3d(-${maxMove}px, 0, 0)`;
        }
        else {
            // Se está dentro da sessão, calcula o movimento suave
            const percentage = currentScroll / scrollDistance;
            const maxMove = track.scrollWidth - window.innerWidth;
            const move = percentage * maxMove;
            
            track.style.transform = `translate3d(-${move}px, 0, 0)`;
        }
    }
});
