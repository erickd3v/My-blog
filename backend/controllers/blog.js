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
                <link rel="stylesheet" href="./css/blog.css">
                <link rel="stylesheet" href="./css/footer.css">
            </head>
            <body>
            <script type="module" src="main.js"></script>
            </body>
        </html>
    `);
}