// HOME
import Header from './components/ui/Header.js';
import Main from './components/ui/Main.js';
import Footer from './components/ui/Footer.js';
// Blogs
import { article1, article2 } from './components/ui/Blog.js';

// import { homeRoute } from '../backend/routes/home.js';

// Home
const header = new Header();
const main = new Main();
const footer = new Footer();

let change = [
    header.render(),
    footer.render()
];

const home = change.toSpliced(1,0,main.render());

// Blogs
const blog1 = change.toSpliced(1, 0, article1.render())
const blog2 = change.toSpliced(1, 0, article2.render())

// EndPoints
const endPoint = [
    '/',
    '/mi-primer-blog',
    '/vanilla-js-beneficios-y-pasar-a-framework'
];

export function app() {
    
    const currentURL = new URL(window.location.href);
    
    urlVerification(currentURL);


    // Adding functionalities
    const burgger = document.querySelector('.burggerIconContainer');
    const options = document.querySelector('.ulOptions');

    burgger.addEventListener('click', ()=> {
        options.classList.toggle('active');
    })

    const logo = document.querySelector('.logo');
    logo.addEventListener('click', ()=> {
        location.href = '/'
    });
}

function urlVerification(currentURL) {
    switch (true) {
        case currentURL.pathname === endPoint[1]:
            blog1.forEach(e => { document.body.appendChild(e) });
            break;
    
        case currentURL.pathname === endPoint[2]:
            blog2.forEach(e => { document.body.appendChild(e) });
            break;
    
        default:
            home.forEach(e => { document.body.appendChild(e) });
            break;
    }
}
