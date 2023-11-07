export default class Footer {
    render() {
        const footerElement = document.createElement('footer');
        footerElement.innerHTML = `
            <h2>Hola</h2>
        `;
        return footerElement;
    }
}
// const footer = new Footer();

// document.body.appendChild(footer.render())