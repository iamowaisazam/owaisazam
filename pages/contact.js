import Head from 'next/head'
import {toast} from 'react-toastify';
import Link from 'next/link'

export default function Contact() {


  const submit = (e) => {
      
       e.preventDefault();
       document.querySelector(".myform").reset();
       toast.success("Form Submitted Successfully");
  }


  return (

    <>
      <Head>
        <title>Contact</title>
      </Head>

      <section className="breadcrumb_area breadcrumb1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb_wrapper d-flex align-items-center justify-content-between flex-wrap">
                <h4 className="page_title">Contact</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/" ><a >Home</a></Link></li>
                    <li className="breadcrumb-item active" aria-current="page">contact</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <section className="my-5 contact-section section-py">
        <div className="container">
          <div className="row mb-n7">
          <div className="col-12" >
              <h1 class="py-5 text-center" >Let's Get in Touch</h1>
          </div>
          <div className="col-lg-6 mb-7">
              <div className="contact-address text-center">
                <div className="address-list mb-4 mb-xl-10 pb-2">
                  <h4 className="title">Current Address</h4>
                  <p>Karachi , Pakistan</p>
                </div>
                <div className="address-list mb-4 mb-xl-10 pb-2">
                  <h4 className="title">Phone / Whatsapp </h4>
                  <ul>
                    <li>Phone:<a className="phone-number" href="tel:+12345678987"> +923112239342</a></li>
                    <li>Email:<a className="phone-number" href="email:+owaisazamtechnical@gmail.com"> owaisazamtechnical@gmail.com</a></li>
                  </ul>
                </div>
                <div className="address-list mb-4 mb-xl-10 pb-2 ">
                  <h4 className="title">Social Networks</h4>
                  <div className="contact-social-icons " >
                    <Link target="_blank" href="https://twitter.com/iamowaisazam" ><a><i className="fab fa-twitter"></i></a></Link>
                    <Link target="_blank" href="https://www.facebook.com/owaisazamtechnical/" ><a><i className="fab fa-facebook-square"></i></a></Link>
                    <Link target="_blank" href="https://api.whatsapp.com/send?phone=+923112239342&text=Hi" ><a><i className="fab fa-whatsapp"></i></a></Link>
                    <Link target="_blank" href="https://www.linkedin.com/in/owais-azam-b345a4149/" ><a><i className="fab fa-linkedin"></i></a></Link>
                    <Link target="_blank" href="https://www.youtube.com/channel/UCN5SvyR9xoe5sxl1TxE1u_g?view_as=subscriber" ><a><i className="fab fa-youtube"></i></a></Link>
                    <Link target="_blank" href="/" ><a><i className="fab fa-skype"></i></a></Link>
                  </div>
                </div>
              </div>
            </div>    
            <div className="col-lg-6 mb-7">
              <form onSubmit={submit} className="myform row"  >
                <div className="col-12 col-sm-6 my-3 mb-7">
                  <input required type="text" className="form-control" name="name" placeholder="Your Name*" />
                </div>
                <div className="col-12 col-sm-6 my-3 mb-7">
                  <input  type="email" className="form-control" name="email" placeholder="Your Email*" />
                </div>
                <div className="col-12  my-3 mb-7">
                  <input type="text" className="form-control" name="phone" placeholder="Phone / Whatsapp" />
                </div>
                <div className="col-12 my-3 mb-9">
                  <textarea required className=" contact-textarea form-control massage-control" name="massage"  cols={10} rows={10} placeholder="Message" defaultValue={""} />
                </div>
                <div className="col-12">
                  <button id="contactSubmit" type="submit" className="btn btn-warning btn-hover-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
        
          </div>
        </div>
      </section>
      </>
  )
}
