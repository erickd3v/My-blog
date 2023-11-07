export default class Header {

    render() {
        // Creando la etiqueta 'header'
        const headerElement = document.createElement('header');

        // Aquí pondremos los elementos previamente creados.
        let logoElement = logo();
        let navBar = nav();
        const elements = [
            logoElement = logo(),
            navBar = nav()
        ]

        // Incrustaremos cada elemento con la metodo '.appendChild'
        elements.forEach(e => {
            headerElement.appendChild(e);
        })

        return headerElement;
    }
}


const logo = () => {
    // Creando la etiqueta picture y su clase 'logo-container' donde se colocara la imagen del logo
    const logoElement = document.createElement('picture');
    logoElement.classList.add('logoContainer');

    // Creando eitiqueta img, su clase e incrustando en la etiqueta 'picture'
    const imageElement = document.createElement('img');
    imageElement.src = '../pictures/svg/logo.svg';
    imageElement.alt = 'logo v2.0';
    imageElement.classList.add('logo');
    
    logoElement.appendChild(imageElement);

    return logoElement;
}

const nav = () => {
    // Creando la etiqueta nav donde se colocaran los elementos relacionados al porfolio
    const navBar = document.createElement('nav');
    navBar.classList.add('navContainer');
    /**
     * Fase de desarrollo, colocar en pantalla una alerta que indique que esta en desarrollo luego de colocar la imagen.
     */
    let buttonContainer = buttonNav();
    let options = navOptions();

    const elementsNav = [
        buttonContainer = buttonNav(),
        options = navOptions(),
    ]

    elementsNav.forEach(e => {
        navBar.appendChild(e);
    })
    
    return navBar;
}

const buttonNav = () => {
    // Creating the 'button' tag and adding a class to hold the 'navIcon'.
    const buttonContainer = document.createElement('button');
    buttonContainer.classList.add('burggerIconContainer');

    // Creating the 'img' tag, embedding the .svg and adding the class.
    const navIcon = document.createElement('img')
    navIcon.src = '../pictures/svg/menu-button.svg';
    navIcon.alt = 'burgger Icon';
    navIcon.classList.add('burgerIcon');

    // Embedding the img tag in the button tag.
    buttonContainer.appendChild(navIcon);
    
    return buttonContainer;
}

const navOptions = () => {
    // 
    const options = document.createElement('ul');
    options.classList.add('ulOptions');
    
            // Inicio
    // li
    let homeContainer = document.createElement('li');
    homeContainer.classList.add('optionTextContainer');
    // a
    let homeText = document.createElement('a');
    homeText.classList.add('optionText');
    homeText.href = '#';
    homeText.innerText = 'Home';

    // 
    homeContainer.appendChild(homeText);

            // About me
    // li
    let aboutContainer = document.createElement('li');
    aboutContainer.classList.add('optionTextContainer');
    // a
    let aboutText = document.createElement('a');
    aboutText.classList.add('optionText');
    aboutText.href = '#';
    aboutText.innerText = 'About me';

    // 
    aboutContainer.appendChild(aboutText);
    
            // Proyects
    // li
    let proyectsContainer = document.createElement('li');
    proyectsContainer.classList.add('optionTextContainer');
    // a
    let proyectsText = document.createElement('a');
    proyectsText.classList.add('optionText');
    proyectsText.href = '#';
    proyectsText.innerText = 'Proyects';

    // 
    proyectsContainer.appendChild(proyectsText);
    
            // Contact
    // li
    let contactContainer = document.createElement('li');
    contactContainer.classList.add('optionTextContainer');
    // a
    let contactText = document.createElement('a');
    contactText.classList.add('optionText');
    contactText.href = '#';
    contactText.innerText = 'Contact';

    // 
    contactContainer.appendChild(contactText);
    
            // Blog
    // li
    let blogContainer = document.createElement('li');
    blogContainer.classList.add('optionTextContainer');
    // a
    let blogText = document.createElement('a');
    blogText.classList.add('optionText');
    blogText.href = '#';
    blogText.innerText = 'Blog';

    // 
    blogContainer.appendChild(blogText);

    // 
    const sectionElement = [
        homeContainer,
        aboutContainer,
        proyectsContainer,
        contactContainer,
        blogContainer,
    ]

    sectionElement.forEach(element => {
        options.appendChild(element)
    });

    return options

}

// const header = new Header();

// document.body.appendChild(header.render())