import Header from './components/ui/Header.js';
import Main from './components/ui/Main.js';
import Footer from './components/ui/Footer.js';

export function app() {
    const header = new Header();
    document.body.appendChild(header.render())
    
    const main = new Main();
    document.body.appendChild(main.render())
    const footer = new Footer();
    document.body.appendChild(footer.render())



    const burgger = document.querySelector('.burggerIconContainer');
    const options = document.querySelector('.ulOptions');

    burgger.addEventListener('click', ()=> {
        options.classList.toggle('active');
    })
}