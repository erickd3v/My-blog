export default class Footer {
    render() {
        const footerElement = document.createElement('footer');
        footerElement.innerHTML = `
            <section class="u-center">
                <a href="mailto:moyae76@gmail.com" target="_blank" rel="noopener nofollow" arial-label="contact">Contacto</a>
                <a href="https://github.com/erickd3v" target="_blank" rel="noopener nofollow" arial-label="GitHub de @erickd3v">GitHub</a>
                <a href="https://www.linkedin.com/in/erickd3v/" target="_blank" rel="noopener nofollow" arial-label="Linkedin de @erickd3v">Linkedin</a>
                <a href="https://www.instagram.com/erick.d3v/" target="_blank" rel="noopener nofollow" arial-label="instagram de @erickd3v">Instagram</a>
            </section>
            <img class="footer-icon" src="../pictures/images/logo.jpg" alt="logo de erickd3v">
        `;
        return footerElement;
    }
}
// const footer = new Footer();

// document.body.appendChild(footer.render())