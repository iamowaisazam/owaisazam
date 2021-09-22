import React, { useEffect, useContext } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import {useRouter} from 'next/router'

export default function Home() {
  
   const router = useRouter();
   if(router.isFallback){
       return <div>Loading</div>
   }

  return (
    <>

      <style jsx>{`
      

      
      `}</style>

        <Head>
            <title>Home</title>
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

      <section className="py-5 card-style">
        <div className="card-style-eleven py-5 ">
          <div className="container">
          <div className="row"><div className="col-12 text-center py-5 " >
            <h1 className="section_heading" >Our Services</h1>
            <p>Deserunt dolore voluptatem assumenda quae possimus sunt dignissimos tempora officia. Lorem ipsum dolor sit amet consectetur adipisicing dolore.</p>
            </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="card card--eleven">
                  <figure>
                    <img src="https://demo.jsnorm.com/html/tizara/dist/img/g1.jpg" />
                  </figure>
                  <div className="card-body text-center">
                    <div className="card-contents">
                      <div className="content-top">
                        <span><i className="la la-bar-chart" /></span>
                        <h6>Traditional Web Appliaction</h6>
                      </div>
                      <div className="content-bottom">
                        <p>Offering Web Based Application Management Systems For Your Bussiness.</p>
                        <Link href="/services/traditional-website" ><a className="btn btn-secondary btn-sm">See Details</a></Link>
                      </div>
                    </div>
                  </div>
                </div>{/* End: .card */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card card--eleven">
                  <figure>
                    <img src="https://demo.jsnorm.com/html/tizara/dist/img/g1.jpg" />
                  </figure>
                  <div className="card-body text-center">
                    <div className="card-contents">
                      <div className="content-top">
                        <span><i className="la la-gear" /></span>
                        <h6>Modern Web Appliaction</h6>
                      </div>
                      <div className="content-bottom">
                        <p>Offering Modern Single Page Smart and Fast Loading Application for Your Bussiness</p>
                        <Link href="/services/modern-website" ><a className="btn btn-secondary btn-sm">See Details</a></Link>
                      </div>
                    </div>
                  </div>
                </div>{/* End: .card */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card card--eleven">
                  <figure>
                    <img src="https://demo.jsnorm.com/html/tizara/dist/img/g1.jpg" />
                  </figure>
                  <div className="card-body text-center">
                    <div className="card-contents">
                      <div className="content-top">
                        <span><i className="la la-gear" /></span>
                        <h6>Wordpress Application</h6>
                      </div>
                      <div className="content-bottom">
                        <p>Offering Wordpress Ecommerce Content Management System. A Content Management System Is A Web Based Software.</p>
                        <Link href="/services/wordpress-website" ><a className="btn btn-secondary btn-sm">See Details</a></Link>
                      </div>
                    </div>
                  </div>
                </div>{/* End: .card */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card card--eleven">
                  <figure><img src="https://demo.jsnorm.com/html/tizara/dist/img/g1.jpg" /></figure>
                  <div className="card-body text-center">
                    <div className="card-contents">
                      <div className="content-top">
                        <span><i className="la la-gear" /></span>
                        <h6>Repair & Custom Web Development </h6>
                      </div>
                      <div className="content-bottom">
                        <p>Offering Maintenance And Support Service For Your Site Will Be Updated We Responsible for  keeping Secure.</p>
                        <Link href="/services/custom-web-development" ><a className="btn btn-secondary btn-sm">See Details</a></Link>
                      </div>
                    </div>
                  </div>
                </div>{/* End: .card */}
              </div>
            </div>{/* ends: .row */}
          </div>
        </div>{/* ends: .card-style-eleven */}
      </section>

      <section className="cta-wrapper cta--four bgimage biz_overlay overlay--secondary">
        <div className="bg_image_holder" style={{backgroundImage: 'url("/images/components/img1.jpg")', opacity: 1}}>
          <img src="img/cbg2.jpg" alt="img/cbg2.jpg" />
        </div>
        <div className="container content_above">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-content text-center">
                <h1 className="display-3">Improve Your Business With Us</h1>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-2">
              <div className="cta-content text-center">
                <p>If you have any questions regarding the purchase of business policy & consulting conditions please call us any time.</p>
                <span className="phone"><i className="fab fa-whatsapp" /> +92 311 223 9342</span>
                <Link href="https://api.whatsapp.com/send?phone=+923112239342&text=Hi" target="_blank" ><a className="mx-2 btn btn-primary">Send Message</a></Link>
                <Link href="/contact" ><a className="mx-2 btn btn-primary">Get in Touch</a></Link>
              </div>
            </div>
          </div>{/* end: .row */}
        </div>
      </section>

      <section className="project-grid-3 py-5 section-bg">
        <div className="card--one">
          <div className="container">
          <div className="row">
            <div className="col-12 text-center py-5 " >
               <h1 className="section_heading" >Our Works</h1>
               <p>Deserunt dolore voluptatem assumenda quae possimus sunt dignissimos tempora officia. Lorem ipsum dolor sit amet consectetur adipisicing dolore.</p>
            </div>
         </div>
            <div className="row">

              <div className="col-lg-4 col-sm-6">
              <Link href="/"  ><a >
                <div className="card card-shadow card-one">
                  <figure>
                    <img src="https://demo.jsnorm.com/html/tizara/dist/img/c1.jpg"  />
                    <figcaption></figcaption>
                  </figure>
                  <div className="card-body">
                    <h6>Financial Sustainability</h6>
                  </div>
                </div></a></Link>
              </div>{/* ends: .col-lg-4 */}

              <div className="col-lg-4 col-sm-6">
              <Link href="/"  ><a >
                <div className="card card-shadow card-one">
                  <figure>
                    <img src="https://demo.jsnorm.com/html/tizara/dist/img/c1.jpg"  />
                    <figcaption></figcaption>
                  </figure>
                  <div className="card-body">
                    <h6>Financial Sustainability</h6>
                  </div>
                </div></a></Link>
              </div>{/* ends: .col-lg-4 */}

              <div className="col-lg-4 col-sm-6">
              <Link href="/"  ><a >
                <div className="card card-shadow card-one">
                  <figure>
                    <img src="https://demo.jsnorm.com/html/tizara/dist/img/c1.jpg"  />
                    <figcaption></figcaption>
                  </figure>
                  <div className="card-body">
                    <h6>Financial Sustainability</h6>
                  </div>
                </div></a></Link>
              </div>{/* ends: .col-lg-4 */}


              <div className="col-lg-4 col-sm-6">
              <Link href="/"  ><a >
                <div className="card card-shadow card-one">
                  <figure>
                    <img src="https://demo.jsnorm.com/html/tizara/dist/img/c1.jpg"  />
                    <figcaption></figcaption>
                  </figure>
                  <div className="card-body">
                    <h6>Financial Sustainability</h6>
                  </div>
                </div></a></Link>
              </div>{/* ends: .col-lg-4 */}

              <div className="col-lg-4 col-sm-6">
              <Link href="/"  ><a >
                <div className="card card-shadow card-one">
                  <figure>
                    <img src="https://demo.jsnorm.com/html/tizara/dist/img/c1.jpg"  />
                    <figcaption></figcaption>
                  </figure>
                  <div className="card-body">
                    <h6>Financial Sustainability</h6>
                  </div>
                </div></a></Link>
              </div>{/* ends: .col-lg-4 */}

              <div className="col-lg-4 col-sm-6">
              <Link href="/"  ><a >
                <div className="card card-shadow card-one">
                  <figure>
                    <img src="https://demo.jsnorm.com/html/tizara/dist/img/c1.jpg"  />
                    <figcaption></figcaption>
                  </figure>
                  <div className="card-body">
                    <h6>Financial Sustainability</h6>
                  </div>
                </div></a></Link>
              </div>{/* ends: .col-lg-4 */}
  
            <div className="col-lg-12 text-center m-top-50">
              <Link href="/our-works"><a  className="btn btn-primary text-white ">View All</a></Link>
            </div>

            </div>
          </div>
        </div>
      </section>

      <section className="cta-wrapper cta--two bgimage biz_overlay overlay--dark">
        <div className="bg_image_holder" style={{backgroundImage: 'url("/images/components/cta2.png")', opacity: 1}}>
          <img src="img/cta2.png"  />
        </div>
        <div className="container content_above">
          <div className="cta-content row d-flex align-items-center">
            <div className="col-lg-9">
              <p>Trusted by over 100+ worldwide business! <br /> Start your projects now.
              </p>
            </div>
            <div className="col-lg-3">
              <div className="action-btn">
               
              </div>
            </div>
          </div>{/* ends: .cta-content */}
        </div>
      </section>

      <section className="team-grid">
        <div className="container">
        <div className="row">
            <div className="col-12 text-center py-5 " >
               <h1 className="section_heading" >Our Team</h1>
            </div>
         </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="team-single team-four">
                <img src="https://demo.jsnorm.com/html/tizara/dist/img/t12.jpg"  />
                <div className="content text-center">
                  <h6><a style={{'color': '#413aa4'}} >Nasir Iqbal</a></h6>
                  <span className="subtitle">Web Developer</span>
                </div>
              </div>{/* ends: .team-single */}
            </div>{/* ends: .col-lg-3 */}
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="team-single team-four">
                <img src="https://demo.jsnorm.com/html/tizara/dist/img/t12.jpg" alt="" />
                <div className="content text-center">
                  <h6><a style={{'color': '#413aa4'}} >Amber Ahmed</a></h6>
                  <span className="subtitle">Content Writer</span>
                </div>
              </div>{/* ends: .team-single */}
            </div>{/* ends: .col-lg-3 */}
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="team-single team-four">
                <img src="https://demo.jsnorm.com/html/tizara/dist/img/t12.jpg" alt="" />
                <div className="content text-center">
                  <h6><a style={{'color': '#413aa4'}} >Khizer Ahmed</a></h6>
                  <span className="subtitle">Web Designer</span>
                </div>
              </div>{/* ends: .team-single */}
            </div>{/* ends: .col-lg-3 */}
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="team-single team-four">
                <img src="https://demo.jsnorm.com/html/tizara/dist/img/t12.jpg" alt="" />
                <div className="content text-center">
                  <h6><a style={{'color': '#413aa4'}} >Sidra Khan </a></h6>
                  <span className="subtitle">WordPress Developer </span>
                </div>
              </div>{/* ends: .team-single */}
            </div>{/* ends: .col-lg-3 */}
          </div>
        </div>
      </section>
      


    </>
  )

}