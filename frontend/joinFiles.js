// HOME
import Header from './components/ui/Header.js';
import { Main } from './components/ui/Main.js';
import Footer from './components/ui/Footer.js';
// Blogs
import { Blog, articleText1, articleText2 } from './components/ui/Blog.js';
import { article1, article2 } from './components/user/UserArticle.js';

// Home
const header = new Header();
const footer = new Footer();

let change = [
    header.render(),
    footer.render()
];

// EndPoints
const endPoint = [
    `/mi-primer-blog`,
    '/vanilla-js-beneficios-y-pasar-a-framework'
];

const homeDatas = [
    // new Main(endPoint[0], article3),
    new Main(endPoint[1], article2),
    new Main(endPoint[0], article1),
];

const home = change.toSpliced(1, 0, homeDatas[0].render(), homeDatas[1].render());

const article = [
    articleText1,
    articleText2,
];

// Blogs
const blog1 = change.toSpliced(1, 0, article[0].render())
const blog2 = change.toSpliced(1, 0, article[1].render())

// This function is the rendering of the application and its interactivity.
export function app() {
    const currentURL = new URL(window.location.href);
    urlVerification(currentURL);

    // Removing the main tag if the URL is not the root.
    const mainContent = document.querySelector('main');
    
    if(currentURL.pathname !== '/') {mainContent.remove()}


    // Adding functionalities
    const burgger = document.querySelector('.burggerIconContainer');
    const options = document.querySelector('.navContainer');

    burgger.addEventListener('click', ()=> {
        options.classList.toggle('active');
    });
}

// Rendering home and blogs based the URL.
function urlVerification(currentURL) {
    const beta = document.querySelector('title');
    switch (true) {
        case currentURL.pathname === endPoint[0]:
            blog1.forEach(e => { document.body.appendChild(e) });
            beta.innerHTML = article1.title
            break;
    
        case currentURL.pathname === endPoint[1]:
            blog2.forEach(e => { document.body.appendChild(e) });
            beta.innerHTML = article2.title
            break;
    
        default:
            home.forEach(e => { document.body.appendChild(e) });
            break;
    }
}
