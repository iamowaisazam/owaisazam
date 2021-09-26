import React from 'react'
import {toast} from 'react-toastify';
import Link from 'next/link';

const Footer = () => {

//   const submit = (e) => {
//     e.preventDefault();
//     e.target.email.value = "";
//     toast.success("Successfully Subscribed");
//  }

return (
        <>
       <footer className="footer6 footer--light-gradient">
            <div className="footer__big">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget text_widget">
                       <Link href="/"><a>
                       <img className="footer_logo" src="/images/logo.png" /></a>
                       </Link>
                       <p>Hi Its Me Owais Azam I am Professionally Full Stack Designer and Developer From Karachi, Pakistan. I am Specialize In Design And Develop Web and Native Applications.</p>
                    </div>
                  </div>{/* ends: .col-lg-3 */}
                  <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-center">
                      <div id="nav_menu-2" className="widget--links widget widget_nav_menu">
                        <h4 className="widget__title2 widget-title">Quick Links</h4>
                        <div className="menu-footer-1-container">
                              <ul id="menu-footer-1" className="menu links">
                              <li  className="menu-item "><Link  href="/" ><a >Home</a></Link></li>
                                <li  className="menu-item "><Link href="/about" ><a >About</a></Link></li>
                                <li  className="menu-item "><Link href="/portfolios" ><a >Our Works</a></Link></li>
                                <li  className="menu-item "><Link href="/contact" ><a>Contact</a></Link></li>
                              </ul>
                            </div>
                          </div>
                    </div>{/* ends: .col-lg-3 */}

                    <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-center">
                      <div id="nav_menu-3" className=" widget--links widget widget_nav_menu">
                          <h4 className="widget__title2 widget-title">Services</h4>
                            <div className="menu-footer-2-container">
                                <ul  className="menu links">
                                  <li  className="menu-item "><Link href="/services/traditional-website"><a>Traditional Web Application</a></Link></li>
                                  <li  className="menu-item "><Link href="/services/modern-website" ><a>Modern Web Application</a></Link></li>
                                  <li  className="menu-item "><Link href="/services/wordpress-website" ><a>Wordpress Web Application</a></Link></li>
                                  <li  className="menu-item "><Link href="/services/custom-web-development" ><a>Repair &amp; Custom Web Development</a></Link></li>
                              </ul>
                          </div>
                      </div>
                    </div>{/* ends: .col-lg-3 */}
                  
                    <div className="col-lg-3 col-md-6 col-sm-6 ">
                      <div className="widget  widget--contact_info">
                        <ul>
                            <li><span className="la la-whatsapp" />
                              <div className="info">
                                <p>+923112239342</p>
                                <small>10am - 8pm</small>
                              </div>
                            </li>
                            <li><span className="la la-envelope" />
                              <div className="info">
                                <p></p>
                                <small>Free enquiry</small>
                              </div>
                            </li>
                            <li><span className="la la-skype" />
                              <div className="info">
                                <p>live:iamowaisazam</p>
                                <small>10am - 8pm</small>
                              </div>
                            </li>
                        </ul>
                      </div>{/* ends: .widget */}       
                    </div>{/* ends: .col-lg-3 */}
                </div>
              </div>
            </div>{/* ends: footer__big */}

            <div className="footer__bottom">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="footer__bottom-content">
                      <p>© 2020. All rights reserved. Created by OwaisAzamTechnical</p>
                      <div className="social-basic ">
                          <ul className="d-flex justify-content-end ">
                              <li><Link href="https://twitter.com/iamowaisazam" ><a target="_blank"><span className="fab fa-twitter" /></a></Link></li>
                              <li><Link href="https://www.facebook.com/owaisazamtechnical/"><a target="_blank"><span className="fab fa-facebook-square" /></a></Link></li>
                              <li><Link href="https://api.whatsapp.com/send?phone=+923112239342&text=Hi" ><a target="_blank" ><span className="fab fa-whatsapp" /></a></Link></li>
                              <li><Link  href="https://www.linkedin.com/in/owais-azam-b345a4149/"  ><a target="_blank" ><span className="fab fa-linkedin" /></a></Link></li>
                              <li><Link href="https://www.youtube.com/channel/UCN5SvyR9xoe5sxl1TxE1u_g?view_as=subscriber" ><a target="_blank"><span className="fab fa-youtube" /></a></Link></li>
                              
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* ends: footer__small */}
      </footer>
        </>
    )
}

export default Footer