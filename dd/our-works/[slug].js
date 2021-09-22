import React,{useEffect,us} from 'react';
import Head from 'next/head'
import {toast} from 'react-toastify';
import Link from 'next/link'

export default function Contact({product}) {

  return (

    <>
    <Head> <title> {product.title} </title></Head>
      <section className="breadcrumb_area breadcrumb1">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="breadcrumb_wrapper d-flex align-items-center justify-content-between flex-wrap">
                    <h4 className="page_title">Our Works</h4>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/" ><a >Home</a></Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{product.slug}</li>
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
                    <img src={`${product.thumbnail}`}  />
                    <figcaption className="d-flex justify-content-center align-items-center">
                    <Link href={product.video} target="_blank"  >
                       <a className="video-iframe play-btn play-btn--lg play-btn-light"> <span className="fab fa-whatsapp" /></a> 
                    </Link>
                    </figcaption>
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
                            <span> {product.credit} </span></li>
                        <li>
                          <span>Author: </span> 
                          <span><Link href={product.author} target="_blank" ><a>{product.author_name}</a></Link></span>
                        </li>
                        <li><span>Technologies : </span> <span>{product.technologies}</span></li>
                        <li><span>Status: </span> <span>{product.status}</span></li>
                        <li><span>Date: </span> <span>{product.date}</span></li>
                        <li><span>Project Demo: </span> 
                            <span><Link href={product.demo} target="_blank" >
                                <a href={product.demo} >{product.title}</a></Link>
                            </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className=" py-3   col-lg-6 col-md-6">
                    <h3 className="m-bottom-20"> {product.title} </h3>
                    <hr />
                    <div className="content">
                      <p>Application is Specially Designed &amp; Developed for Invoice &amp; Billing Management System.</p>
                      <p id="item-description__theme-features">There are Following&nbsp; Features Of This Application.</p>
                      <ol>
                        <li>Responsive Design.</li>
                        <li>Multiple Users.</li>
                        <li>Roles &amp; Permissions</li>
                        <li>Customers.</li>
                        <li>Transaction’s.</li>
                        <li>Products.</li>
                        <li>Orders.</li>
                        <li>Order Status</li>
                        <li>Messages.</li>
                        <li>Invoice Slips</li>
                        <li>Reports</li>
                        <li>Settings.</li>
                      </ol>
                    </div>
                    <hr />
                    <div style={{borderBottom: 'none', marginBottom: '8px'}} className="post-bottom d-flex justify-content-between">
                      <div className="block">
                        <span className="d-block m-right-15">Share Project : </span>
                      </div>
                      <div className="social-share d-flex align-items-center">
                        <div className="social social--small social--colored ">
                          <ul className="d-flex flex-wrap">
                            <li>
                              <a target="_blank" href="https://www.facebook.com/sharer.php?u=http://localhost/owaisazamtechnical/portfolio/invoice-management/" className="facebook"> <span className="fab fa-facebook-f" /></a>
                            </li>
                            <li>
                              <a target="_blank" href="https://api.whatsapp.com/send?text=http://localhost/owaisazamtechnical/portfolio/invoice-management/" className="whatsapp"> <span className="fab fa-whatsapp" /></a>
                            </li>
                            <li>
                              <a href="https://twitter.com/share?url=http://localhost/owaisazamtechnical/portfolio/invoice-management/&text=[http://localhost/owaisazamtechnical/portfolio/invoice-management/&via=via&hashtags=owaisazamtechnical" className="twitter"><span className="fab fa-twitter" /></a>
                            </li>
                            <li><a href="https://www.linkedin.com/shareArticle?url=http://localhost/owaisazamtechnical/portfolio/invoice-management/&title=http://localhost/owaisazamtechnical/portfolio/invoice-management/" className="linkedin"><span className="fab fa-linkedin-in" /></a></li>
                          </ul>
                        </div>{/* ends: .social */}
                      </div>
                    </div>
                    {/* Comment Section */}
                    {/* Comment End */}
                  </div>
                </div>
              </div>{/* ends: .col-lg-12 */}
            </div>
          </div>
        </div>
        </section>
      

  </>
  )
}



export async function getStaticPaths() {
    return {
        paths: [
          { params: { slug: 'car-booking' } },
        ],
        fallback: true,
      }
  }




export async function getStaticProps({params}) {
    console.log(params.slug);

    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL)
    const products = await res.json()
    const product = products[0];

    return {
      props: {
        product,
      },
    }
  }





