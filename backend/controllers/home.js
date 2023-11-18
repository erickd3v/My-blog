export const getData = (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Erick Moya - erickdev</title>
                <link rel="icon" href="./pictures/images/logo.jpg">
                <link rel="stylesheet" href="./css/header.css">
                <link rel="stylesheet" href="./css/main.css">
                <link rel="stylesheet" href="./css/footer.css">
                <script type="module" src="main.js"></script>
            </head>
            <body>
            <main class="home-feed u-center">
                <h1 class="section-title">Últimos artículos<h1>
                <section class="section-post">
                </section>
            </main>
            </body>
        </html>
    `);
}