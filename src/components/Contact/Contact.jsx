import React from 'react'
import './contactstyle.css';

export default function Contact() {
    return (
        <div>
   <div>
  <header>
    <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
      <div className="carousel-inner  ">
        <div className="carousel-item active">
          <div className="overlay">
          </div>
          <img src="../assets/images/bg_2.jpg" className="d-block w-100 h-100" alt="..." />
          <div className="carousel-caption  d-md-block" data-aos="fade-up">
            <p className="font-weight-bold mypagehead">Contact</p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent text-white d-flex justify-content-center" data-aos="fade-up">
                <li className="breadcrumb-item text-white"><a routerlink="../home" className="text-white text-decoration-none">HOME</a> </li>
                <li className="breadcrumb-item active text-white" aria-current="page">CONTACT</li>
              </ol>
            </nav>
          </div>
        </div>  
      </div>
      <app-nav />
    </div>
  </header>  
  <section>
    <div className="container ">
      <div className="row">
        <div className="col-md-6 " data-aos="fade-right">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218827.8725484377!2d30.308502490564813!3d31.021080765851742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f60d81ab2c6a57%3A0xa93943f019ef168!2sDamanhour%2C%20El%20Beheira%20Governorate!5e0!3m2!1sen!2seg!4v1611084134077!5m2!1sen!2seg" width="100%" height={600} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h2 className="py-4">Contact Us</h2>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="User Name" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="User Email" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea className="form-control" name id rows={6} placeholder="Message" defaultValue={""} />
            </div>
            <button type="button" className="btn btn-primary px-3">Send Message</button>
          </form>
        </div>
        <div className="col-12 py-5" data-aos="zoom-in-down">
          <h2>Contact Information</h2>
          <div className="row py-3 contactdata">
            <div className="col-md-3">
              <p>Address: <span>198 West 21th Street, Suite 721 New York NY 10016 198 West 21th Street, Suite 721 New York NY 10016</span> </p>
            </div>
            <div className="col-md-3">
              Phone: <span>+ 1235 2355 98</span>
            </div>
            <div className="col-md-3">
              Email: <span>info@yoursite.com</span> 
            </div>
            <div className="col-md-3">
              Website: <span>yoursite.com</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3  px-2 mt-2" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration={900}>
          <h2 className="py-4">Feliciano</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div className="social">
            <a href="#"><i className="fab fa-facebook" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
          </div>
        </div>
        <div className="col-md-3  px-2 mt-2" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration={900}>
          <h2 className="py-4">Open Hours</h2>
          <ul className="list-group bg-black">
            <li className="list-group-item p-0 d-flex justify-content-between"> <span>Monday</span>  <span>9:00 - 24:00</span></li>
            <li className="list-group-item p-0 d-flex justify-content-between"> <span>Tuesday</span>  <span>9:00 - 24:00</span></li>
            <li className="list-group-item p-0 d-flex justify-content-between"> <span>Wednesday</span>  <span>5:00 - 24:00</span></li>
            <li className="list-group-item  p-0 d-flex justify-content-between"> <span>Thursday</span>  <span>9:00 - 24:00</span></li>
            <li className="list-group-item  p-0 d-flex justify-content-between"> <span>Friday</span>  <span>5:00 - 24:00</span></li>
            <li className="list-group-item p-0 d-flex justify-content-between"> <span>Saturday</span>  <span>5:00 - 24:00</span></li>
            <li className="list-group-item p-0 d-flex justify-content-between"> <span>Sunday</span>  <span>9:00 - 24:00</span></li> 
          </ul>
        </div>
        <div className="col-md-3 px-2 mt-2" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration={900}>
          <h2 className="py-4">Instagram</h2>
          <div className="container">
            <div className="row insta">
              <div className="col-md-4 col-6  p-0 m-0 ">
                <img src="../../assets/images/insta-1.jpg" className="w-100" alt srcSet />
              </div>
              <div className="col-md-4 col-6 p-0 m-0">
                <img src="../../assets/images/insta-2.jpg" className="w-100" alt srcSet />
              </div>
              <div className="col-md-4 col-6 p-0 m-0">
                <img src="../../assets/images/insta-3.jpg" className="w-100" alt srcSet />
              </div>
              <div className="col-md-4 col-6 p-0 m-0">
                <img src="../../assets/images/insta-4.jpg" className="w-100" alt srcSet />
              </div>
              <div className="col-md-4  col-6 p-0 m-0">
                <img src="../../assets/images/insta-5.jpg" className="w-100" alt srcSet />
              </div>
              <div className="col-md-4 col-6 p-0 m-0">
                <img src="../../assets/images/insta-6.jpg" className="w-100" alt srcSet />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3  px-2 mt-2" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration={900}>
          <h2 className="py-4">Newsletter</h2>
          <p>Far far away, behind the word mountains, far from the countries.</p>
          <form>
            <div className="form-group">
              <input type="text" className="form-control myinput" name id aria-describedby="helpId" placeholder="Enter Email Address" />
            </div>
            <div className="form-group">
              <button type="button" className="form-control ">Subscribe</button>
            </div>
          </form>
        </div>
        <div className="col-12 text-center  py-5 mt-2" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration={900}>
          Copyright ©2021 All rights reserved | This template is made with by Mahmoud Hamdy
        </div>
      </div>
    </div>
  </footer>
</div>

  

        </div>
    )
}
