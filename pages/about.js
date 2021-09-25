import Head from 'next/head'
import Link from 'next/link'


export default function About() {
  return (<>

      <Head>
        <title>About Us</title>
        <meta name="description" content="Owais Azam Technical Full Stack Front and Back End Developer Skills Desktop, Mobile and Website web Native Applications,Youtuber, Php,Jquery, Ajax,Laravel,Wordpress," />
      </Head>

      <section className="breadcrumb_area breadcrumb1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb_wrapper d-flex align-items-center justify-content-between flex-wrap">
                <h4 className="page_title">About</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/" ><a>Home</a></Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">about</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>{/* ends: .row */}
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 ">         
              <h2 className="m-bottom-20">Owais Azam Technical</h2>
              <p>Hi Its Me Owais Azam I am Working as a Professionally Full Stack Designer and Developer Since 2 Years In Karachi,Pakistan. I am Specialize In Design And Develop Fully Responsive And Seo Friendly Web and Native Applications.</p>
              <p>I Have Worked With Multiple Languages And Frameworks Php Objected Oriented WordPress Theme and Plugin Development, Laravel, Bootstrap, Blogger, React &amp; React Native, Firebase and Firebase Cloud Functions Also Work With Api’s Integrations etc.</p>
              <p>I am Also Expertise In Seo,Content Wrtiting, Facebook Marketing, C panel Domain and Hosting Configuration ,&nbsp; Graphic Designing &amp; Video Editing.</p><p>I Love To Teach and Share Knowledge To Others. If You Are Intrested To Learn Programming, Technology Facts, Games &amp; Software Reviews.Graphic Designing and Video Editing Then Follow Me On Youtube and Facebook</p>
            </div>{/* ends: .col-lg-5 */}
            <div className="col-lg-4 text-center">
              <img style={{maxWidth: '341px', width: '100%'}} src="/images/owais/owaisazam2.jpg" className="rounded" />
              <div className="d">
               <Link target="_blank" href="https://drive.google.com/file/d/1QYZQbRIMbVMK3IYWJl1QLrrnimMfltBY/view?usp=sharing" ><a  className="mx-1 btn btn-secondary btn-icon icon-left m-top-30">Resume</a></Link> 
               <Link href="/contact" ><a  className="mx-1 btn btn-primary btn-icon icon-left m-top-30"> Contact Us</a></Link> 
              </div>
            </div>{/* ends: .video-single */}
          </div>{/* ends: .col-lg-6 */}
        </div>{/* ends: .row */}
      </section>

      <div className="section-bg">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-7">
              <h2>Some Of Main Skills</h2>
              <p>I am Expert in These Languages and Frameworks. I Have  Developed Complete Website Single-handedly.I Can Manage Domain And Hosting Server Settings , On Page and Off Page Seo Keyword Strategy, Image Re-sizing and Optimization, Ui &amp; Ux Rules, Website Legacy Policy, Responsive Designs, Animations, Color Scheme Structures etc.</p>  
            </div>
            <div className="col-lg-5">
              <div className="progress-wrapper">
                <div className="labels d-flex justify-content-between">
                  <span>WordPress</span>
                  <span>80%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-secondary" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                </div>{/* ends: .progress */}
              </div>{/* ends: .progress-wrapper */}
              <div className="progress-wrapper">
                <div className="labels d-flex justify-content-between">
                  <span>Laravel</span>
                  <span>100%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-secondary" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>{/* ends: .progress */}
              </div>{/* ends: .progress-wrapper */}
              <div className="progress-wrapper">
                <div className="labels d-flex justify-content-between">
                  <span>Bootstrap</span>
                  <span>100%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-secondary" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>{/* ends: .progress */}
              </div>{/* ends: .progress-wrapper */}

              <div className="progress-wrapper">
                <div className="labels d-flex justify-content-between">
                  <span>Jquery</span>
                  <span>100%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-secondary" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>{/* ends: .progress */}
              </div>{/* ends: .progress-wrapper */}
              
              <div className="progress-wrapper">
                <div className="labels d-flex justify-content-between">
                  <span>Nodejs</span>
                  <span>50%</span>
                </div>  
                <div className="progress">
                  <div className="progress-bar bg-secondary" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>{/* ends: .progress */}
              </div>{/* ends: .progress-wrapper */}

              <div className="progress-wrapper">
                <div className="labels d-flex justify-content-between">
                  <span>React</span>
                  <span>50%</span>
                </div>  
                <div className="progress">
                  <div className="progress-bar bg-secondary" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>{/* ends: .progress */}
              </div>{/* ends: .progress-wrapper */}

            </div>{/* ends: .col-lg-5 */}
          </div>{/* ends: .row */}
        </div>
      </div>

      <div className="m-bottom-80 pt-5"> 
        <div className="timeline_area timeline_area--2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="timeline2">
                  <h3>Education</h3>
                  <div className="happening2">
                    <p className="happening2__period">2018 - Continue</p>
                    <h6 className="happening2__title">Software Engineering Diploma</h6>
                    <p>Studying 3 Years Software Engineering Diploma at Aptech Computer Education Karachi</p>
                  </div>{/* ends: .happening2 */}
                  <div className="happening2">
                    <p className="happening2__period">2016 - 2017</p>
                    <h6 className="happening2__title">Computer IT Course</h6>
                    <p>Studied Computer IT Course at Sindh Technical Board Karachi </p>
                  </div>{/* ends: .happening2 */}
                  <div className="happening2">
                    <p className="happening2__period">2015 - 2016</p>
                    <h6 className="happening2__title">Graphic Design Course</h6>
                    <p>Studied Graphic Design Course at The Experts Learning Center Karachi </p>
                  </div>{/* ends: .happening2 */}
                  <div className="happening2">
                    <p className="happening2__period">2013 - 2014</p>
                    <h6 className="happening2__title">English Language Course</h6>
                    <p>Studied English Language Course at Domino English Learning Center Karachi </p>
                  </div>{/* ends: .happening2 */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="timeline2">
                  <h3>Experience</h3> 
                  <div className="happening2">
                    <p className="happening2__period">2020 - Continue</p>
                    <h6 className="happening2__title">Full Stack Developer</h6>
                    <p>Working As Full Stack Developer in Kreatix Solution (Software House) </p>
                  </div>{/* ends: .happening2 */}
                  <div className="happening2">
                    <p className="happening2__period">2019 - 2020</p>
                    <h6 className="happening2__title">Full Stack Developer</h6>
                    <p>Worked As Full Stack Developer in Awantec Solution (Software House) </p>
                  </div>{/* ends: .happening2 */}
                  <div className="happening2">
                    <p className="happening2__period">2018 - 2019</p>
                    <h6 className="happening2__title">Front &amp; Back End Developer</h6>
                    <p>Worked As Front &amp; Back End Developer in Digi Global (Software House) </p>
                  </div>{/* ends: .happening2 */}
                  <div className="happening2">
                    <p className="happening2__period">2016 - 2017</p>
                    <h6 className="happening2__title">Graphic Designer</h6>
                    <p>Worked As Senior Graphic Designer &amp; Video Editor in Ali Jafrani Photography </p>
                  </div>{/* ends: .happening2 */}
                  <div className="happening2">
                    <p className="happening2__period">2014 - 2016</p>
                    <h6 className="happening2__title">Supervisor &amp; Manager</h6>
                    <p>Worked As Supervisor &amp; Accounts Manager in Sky Age Garments </p>
                  </div>{/* ends: .happening2 */}
                </div>
              </div>
            </div>
          </div>
        </div>{/* ends: .timeline_area */}
      </div>
      
    </>
  )
}
