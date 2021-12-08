import React,{useEffect,useState} from 'react';
import Head from 'next/head'
import Link from 'next/link'
import {decode} from 'html-entities';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Works() {
 
  const router = useRouter();
  const [Portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {

      if(router.query.slug != undefined){
        getdata();
      }
  
  },[router.query.slug]);




 

  const getdata =  () => {

        axios.get('https://azamsolutions.com/api/portfolios').then( async (res) => {
              let resData = await res.data;
              let product = await resData.find(o => o.slug === router.query.slug);

              if(product == undefined){
                router.push('/portfolios');
              }else{
                
                await setPortfolio(product);
                hhh(product.des);
                setLoading(false);

              }
           
        });

  }

  const find = (data) => {
      data.forEach(item => {
          if(item.slug == router.query.slug){
            return item;
          }
      });
  }

  function hhh(des){

      let dd = decode(des);
      document.querySelectorAll('.content')[0].innerHTML = decode(dd);
  }

  return (
    <>
       
       {Portfolio != null ? <>

        <Head> 
          <title>{Portfolio.title}</title>
          <meta name="description" content={Portfolio.excerpt} />
        </Head>

            <section className="breadcrumb_area breadcrumb1">
                  <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                      <div className="breadcrumb_wrapper d-flex align-items-center justify-content-between flex-wrap">
                          <h4 className="page_title">Our Works</h4>
                          <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                              <li className="breadcrumb-item"><Link href="/" ><a >Home</a></Link></li>
                              <li className="breadcrumb-item active" aria-current="page">{Portfolio.slug}</li>
                          </ol>
                          </nav>
                      </div>
                      </div>
                  </div>
                  </div>
            </section>

            <section className="project-single p-top-100 p-bottom-70 ">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="py-md-3"> 
                    <div className="portfolio-thumbnail video-single video-overlay">
                      <figure>
                        <img src={`https://azamsolutions.com/public/front/img/portfolio/${Portfolio.thumbnail}`}  />
                        { Portfolio.video != null ? 
                        <figcaption className="d-flex justify-content-center align-items-center">
                          <Link href={Portfolio.video}>
                            <a target="_blank"  className="video-iframe play-btn play-btn--lg play-btn-light"><span className="fas fa-play" /></a> 
                          </Link>
                        </figcaption> :'' }
                      </figure>
                    </div>
                  </div>
                  
                  <div className="col-lg-12  ">
                    <div className="project-info row">
                      <div className="py-3 order-md-2 col-lg-5 offset-lg-1  col-md-6">
                        <div className="info-box">
                          <h6>Project quick info:</h6>
                          <ul>
                            <li>
                                <span>Design &amp; Developed By: </span> 
                                <span> Owais Azam </span></li>
                          { Portfolio.author != null ?  <li>
                              <span>Author: </span> 
                              <span><Link href={Portfolio.author} ><a target="_blank" >{Portfolio.author_name}</a></Link></span>
                            </li> : '' }
                            <li><span>Technologies : </span> <span>{Portfolio.technologies}</span></li>
                            <li><span>Status: </span> <span>{Portfolio.status}</span></li>
                            <li><span>Date: </span> <span>{Portfolio.date}</span></li>
                            { Portfolio.demo != null ?  <li><span>Project Demo: </span> 
                                <span><Link href={Portfolio.demo}>
                                    <a target="_blank">{Portfolio.title}</a></Link>
                                </span>
                            </li> : '' }
                          </ul>
                        </div>
                      </div>
                      <div className=" py-3   col-lg-6 col-md-6">
                        <h3 className="m-bottom-20"> {Portfolio.title} </h3>
                        <hr />
                        <div className="content">
                        

                        </div>
                        <hr />
                  
                        {/* Comment Section */}
                        {/* Comment End */}
                      </div>
                    </div>
                  </div>{/* ends: .col-lg-12 */}
                </div>
              </div>
            </div>
        </section>

        </> : <div className="text-center" > <img src='/images/loader.gif' /> </div>  }

    </>
  )
}
