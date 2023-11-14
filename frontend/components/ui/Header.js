export default class Header {

    render() {
        // Creando la etiqueta 'header'
        const headerElement = document.createElement('header');
        headerElement.innerHTML = `
            <picture class="logoContainer">
                <img src="../pictures/svg/logo.svg" alt="logo v2.0" class="logo">
            </picture>
            <nav class="navContainer">
                <button class="burggerIconContainer">
                    <img src="../pictures/svg/menu-button.svg" alt="burgger Icon" class="burgerIcon">
                </button>
                <ul class="ulOptions">
                    <li class="optionTextContainer">
                        <a class="optionText" href="#">Home</a>
                    </li>
                    <li class="optionTextContainer">
                        <a class="optionText" href="#">About me</a>
                    </li>
                    <li class="optionTextContainer">
                        <a class="optionText" href="#">Proyects</a>
                    </li>
                    <li class="optionTextContainer">
                        <a class="optionText" href="#">Contact</a>
                    </li>
                    <li class="optionTextContainer">
                        <a class="optionText" href="#">Blog</a>
                    </li>
                </ul>
            </nav>
        `;
        return headerElement;
    }
}