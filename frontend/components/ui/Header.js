export default class Header {
    render() {
        // Creando la etiqueta 'header'
        const headerElement = document.createElement('header');
        headerElement.innerHTML = `
            <div class="header-inner u-center">
                <a id="logo" href="/">
                    <picture>
                        <img src="../pictures/svg/logo.svg" alt="logo v2.0" class="my-logo">
                    </picture>
                </a>
                <button class="burggerIconContainer">
                    <img src="../pictures/svg/menu-button.svg" alt="burgger Icon" class="burgerIcon">
                </button>
                <nav class="navContainer">
                    <ul class="ulOptions">
                        <li class="optionTextContainer">
                            <a class="optionText" href="#">Inicio</a>
                        </li>
                        <li class="optionTextContainer">
                            <a class="optionText" href="#">Sobre mí</a>
                        </li>
                        <li class="optionTextContainer">
                            <a class="optionText" href="#">Proyectos</a>
                        </li>
                        <li class="optionTextContainer">
                            <a class="optionText" href="#">Contacto</a>
                        </li>
                        <li class="optionTextContainer">
                            <a class="optionText" href="/">My Blog</a>
                        </li>
                    </ul>
                </nav>
            </div>
        `;
        return headerElement;
    }
}