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
                <meta name="keywords" content="Owais Azam Technical, Responsive Web Design Develop, Html,Css,Wordpress, Tutorial,Bootstrap,Softwares Programing, Php, Seo, Laravel,React js" />
                <meta name="author" content="Hi Its Me Owais Azam I am Professionally Full Stack Designer and Developer From Karachi, Pakistan. I am Specialize In Design And Develop Web and Native Applications." />
                    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
                    <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
                    <link rel='stylesheet' id='fontawesome-css' href='https://use.fontawesome.com/releases/v5.0.1/css/all.css?ver=4.9.1' type='text/css' media='all' />
                    <link rel="stylesheet" href="/css/plugins/nprogress.css" />
                </Head>
                <body>
                  <Main />
                   
      
                  <div id="fb-root"></div>          
                  <div className="fb-customerchat" attribution="setup_tool" page_id="114948109191925"> </div>

                   <script src="/facebook.js" > </script>
                   <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">  </script>
                  
                  <NextScript />
                </body>
              </Html>
              );
         }
}

export default MyDocument;