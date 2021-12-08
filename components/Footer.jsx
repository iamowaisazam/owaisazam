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
            <div className="footer__bottom">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="footer__bottom-content">
                      <p>© 2020. All rights reserved. Created by OwaisAzam</p>
                   
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