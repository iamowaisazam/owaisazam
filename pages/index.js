import React, { useEffect, useContext, useState } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import {useRouter} from 'next/router'
import axios from 'axios';

export default function Home() {

  const [Portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

   const router = useRouter();
   if(router.isFallback){
       return <div>Loading</div>
   }

  

   useEffect(() => {
      
   
   
     getdata();

  },[]);

  const getdata = () => {

    axios.get('https://azamsolutions.com/api/portfolios').then((res) => {
      setPortfolios(res.data);
      setLoading(false);
    });

  }

  return (
    <>

      <Head>
            <title>Home</title>
            <meta name="description" content="Owais Azam Technical Full Stack Front and Back End Developer Skills Desktop, Mobile and Website web Native Applications,Youtuber, Php,Jquery, Ajax,Laravel,Wordpress," />     
      </Head>

        <section className="home-banner" >
            <div style={{background: "#F1F2F7"}} className="home-intro intro-four bgimage">
              <div  className="intro-four--contents content_above">
                  <div className="container">
                    <div className="row">
                        <div className="order-2 order-sm-1 col-sm-7 col-lg-7 align-self-center ">
                          <div className="left-con">
                              <span>Full Stack Developer</span>
                              <h1 className="display-3">Owais Azam <span>Technical</span></h1>
                              <p>Hi Its Me Owais Azam I am Professionally Full Stack Designer and Developer From Karachi, Pakistan. I am Specialize In Design And Develop Web and Native Applications.</p>
                              <div >
                                <ul className="list-unstyled ">
                                  <li><Link href="/about" ><a className="btn btn-primary btn-icon icon-right">About Us </a></Link></li>
                                  <li><Link href="/contact" ><a className="btn btn-light btn-icon icon-right">Contact Us </a></Link></li>
                                </ul>
                              </div>
                          </div>
                        </div>
                        <div className="col-sm-5 col-lg-5 text-center text-lg-right">
                          <img src="/images/owais/owaisazam1.jpg"  />       
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </section>


      <section className="project-grid-3 py-5 ">
        <div className="card--one">
          <div className="container">
          <div className="row">
            <div className="col-12 text-center py-5 " >
               <h1 className="section_heading" >Our Works</h1>
               <p>SOME OF OUR AWESOME WORKS. We are showcasing our amazing and inspiring portfolios.</p>
            </div>
         </div>
         { loading == false ?
            <div className="row">
                    { Portfolios.map( (element,key) => {   
                      if( key < 6 ) {

                    return <div key={key} className="col-lg-4 col-sm-6">
                      <Link href={`/portfolios/get?slug=${element.slug}`}  ><a >
                        <div className="card card-shadow card-one">
                          <figure>
                            <img src={'https://azamsolutions.com/public/front/img/portfolio/'+element.thumbnail}  />
                            <figcaption></figcaption>
                          </figure>
                          <div className="card-body">
                            <h6>{element.title}</h6>
                          </div>
                        </div></a></Link>
                      </div>
                      }

                      })
                    }
    
                <div className="col-lg-12 text-center m-top-50">
                  <Link href="/portfolios"><a  className="btn btn-primary text-white ">View All</a></Link>
                </div>
            </div> : <div className="text-center" > <img src='/images/loader.gif' /> </div> 
            
            }
          </div>
        </div>
      </section>

    </>
  )

}