import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
        return (
              <Html>
                <Head>
                    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
                    <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,900|Mirza:400,700&amp;subset=arabic" rel="stylesheet" />
                   <link href="https://fonts.googleapis.com/css?family=Allura" rel="stylesheet" />
                   <link rel='stylesheet' id='fontawesome-css' href='https://use.fontawesome.com/releases/v5.0.1/css/all.css?ver=4.9.1' type='text/css' media='all' />
                   <link rel="stylesheet" href="/css/plugins/nprogress.css" />
               
                </Head>
                <body>
                  <Main />
                  <NextScript />
               
                </body>
              </Html>
              );
         }
}

export default MyDocument;