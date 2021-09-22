import React,{useEffect,us} from 'react';
import Head from 'next/head'
import {toast} from 'react-toastify';
import Link from 'next/link'

export default function Contact({slug}) {
   
  console.log(slug);

  return (

    <>
    <Head> <title>{ slug != undefined ? slug : 'none' }</title></Head>
      <section className="breadcrumb_area breadcrumb1">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="breadcrumb_wrapper d-flex align-items-center justify-content-between flex-wrap">
                    <h4 className="page_title">Our Works</h4>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/" ><a >Home</a></Link></li>
                        <li className="breadcrumb-item active" aria-current="page">ss</li>
                    </ol>
                    </nav>
                </div>
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
        fallback: false,
      }
  }




export async function getStaticProps({params}) {
        let slug = params;
    // const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL)
    // const products = await res.json()
    // const product = products[0];

    return {
      props: {
        slug:slug.slug
      },
    }
  }





