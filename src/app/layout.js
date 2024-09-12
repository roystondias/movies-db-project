export default function RootLayout({ children }) {
    return (
        <html lang="en" >
            <head>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />


                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

                <title>Movies DB</title>
            </head>

            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}