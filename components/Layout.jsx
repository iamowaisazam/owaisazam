import  { Html, Main, NextScript } from 'next/document'
import Head from "next/head";
import Footer from './Footer';
import Header from './Header';



export default function Layout(props) {

  return (<>
            <div className="parent-container" >
           
            <Header/>
              {props.children}
            <Footer/>
            </div>

         </>);
}