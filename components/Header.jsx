import React,{useContext,useEffect} from 'react'
import Link from 'next/link'

const Header = () => {
  
  const navhand = () => {

      let mobilenav =  document.querySelectorAll('.mobile-nav-items')[0];
      let tt = mobilenav.style;
      if(mobilenav.style.display == "block"){
        mobilenav.style.display = "none";
      }else{
        mobilenav.style.display = "block";
      }

  }

    return (<>

    <style jsx>{`

        .main-menu-item {
          position: relative;
          font-size: 19px;
        }
    
    `}</style>
    
      <header id="header" className="header">
        <div className="desktop menu_area ">
                <nav className="navbar navbar-expand-lg navbar-light bg-light px-0">
                    <Link href="/" ><a className="navbar-brand order-sm-1 order-1" >
                    <img src="/images/logo.png" /></a></Link>
                      <div className="collapse navbar-collapse order-md-1" id="navbarSupportedContent2">
                          <ul className="d-lg-inline-flex navbar-nav ml-auto">
                              <li className="nav-item ">
                                <Link href="/" ><a className="nav-link" >Home</a></Link>
                              </li>
                              <li className="nav-item "> 
                                <Link href="/about" ><a className="nav-link" >About</a></Link>
                              </li>
                              <li className="nav-item ">
                                 <Link href="/portfolios" ><a className="nav-link" >Our Works</a></Link>
                              </li>
                              <li className="nav-item "><Link href="/contact" ><a className="nav-link" >Contact</a></Link>
                              </li>   
                              <li className="main-menu-item" > </li>                                
                          </ul>   
                </div>
            </nav>
        </div>
      

         <div className="mobile menu_area menu1">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link href="/" ><a className="navbar-brand" >
                    <img src="/images/logo.png" /></a></Link>
                  <button onClick={navhand} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                  <div className="mobile-nav-items collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item ">
                        <Link href="/" ><a className="nav-link" >Home</a></Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/about" ><a className="nav-link" >About</a></Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/portfolios" ><a className="nav-link" >Our Works</a></Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                        <div className="d-block dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link href="/services/traditional-website" ><a className="dropdown-item" >Traditional Web Application</a></Link>
                        <Link href="/services/modern-website" ><a className="dropdown-item" >Modern Web Application</a></Link>
                        <Link href="/services/wordpress-website" ><a className="dropdown-item" >Wordpress Web Application</a></Link>
                        <Link href="/services/custom-web-development" ><a className="dropdown-item" >Repair &amp; Custom Web Development</a></Link>
                        </div>
                      </li>
                      <li className="nav-item">
                         <Link href="/contact" ><a className="nav-link" >Contact</a></Link>
                      </li>
                    </ul>
                </div>
           </nav>
        </div> 
    
      </header>
      </>)
}

export default Header