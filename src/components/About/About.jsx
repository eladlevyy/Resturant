import React from 'react'
import './aboutstyle.css';

export default function About() {
    return (
        <div>
                  

        <div>
  <header>
    <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
      <div className="carousel-inner  ">
        <div className="carousel-item active">
          <div className="overlay">
          </div>
          <img src="../assets/images/bg_3.jpg" className="d-block w-100 h-100" alt="..." />
          <div className="carousel-caption  d-md-block" data-aos="fade-up">
            <p className="font-weight-bold mypagehead">About</p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent text-white d-flex justify-content-center" data-aos="fade-up">
                <li className="breadcrumb-item text-white"><a routerlink="../home" className="text-white text-decoration-none">HOME</a> </li>
                <li className="breadcrumb-item active text-white" aria-current="page">ABOUT</li>
              </ol>
            </nav>
          </div>
        </div>  
      </div>
      <app-nav />
    </div>
  </header>  
  <section className="py-5 ">
    <div className="container" data-aos="zoom-in-up">
      <div className="row">
        <div className="col-md-3 about m-2">
        </div>
        <div className="col-md-3 about2 m-2 mt-5">
        </div>
        <div className="col-md-5">
          <div className="heading " data-aos="zoom-in-up">
            <h3>About</h3>
            <h2>Feliciano Restaurant</h2>
          </div>
          <p className="text-muted aboutdata">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          <p className="text-muted">Mon - Fri <span className="font-weight-bold text-dark"> 8 AM - 11 PM</span></p>
          <p className="number">+ 1-978-123-4567</p>
        </div>
      </div>
    </div>
  </section>
  <section className="rate pb-5 text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-2 " data-aos="zoom-in-up">
          <span>18</span>
          <h2 className="text-muted">Years of Experienced</h2>
        </div>
        <div className="col-md-2" data-aos="zoom-in-up">
          <span>100</span>
          <h2>Menus/Dish</h2>
        </div>
        <div className="col-md-2" data-aos="zoom-in-up">
          <span>50</span>
          <h2>Staffs</h2>
        </div>
        <div className="col-md-3" data-aos="zoom-in-up">
          <span>15.000</span>
          <h2>Happy Customers</h2>
        </div>
        <div className="col-md-3 ratedata" data-aos="zoom-in-up">
          A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </div>
      </div>
    </div>
  </section> 
  <section className="py-5 services">
    <div className="heading  justify-content-center" data-aos="zoom-in-up">
      <h3 className="mb-2">Services </h3>
      <h2> Catering Services</h2>
    </div>
    <div className="container">
      <div className="row text-center py-3">
        <div className="col-md-4" data-aos="zoom-in-up">
          <i className="fas fa-birthday-cake" />
          <h3 className="py-2 font-weight-bold">Birthday Party</h3>
          <p className="text-muted">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>
        <div className="col-md-4" data-aos="zoom-in-up">
          <i className="fas fa-handshake" />   
          <h3 className="py-2 font-weight-bold">Business Meetings</h3>
          <p className="text-muted">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>
        <div className="col-md-4" data-aos="zoom-in-up">
          <i className="fas fa-glass-cheers" />
          <h3 className="py-2 font-weight-bold">Wedding Party</h3>
          <p className="text-muted">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="menu py-5">
    <div className="heading  justify-content-center" data-aos="zoom-in-up">
      <h3 className="mb-2">Specialties </h3>
      <h2> Our Menu</h2>
    </div>
    <div className="container">
      <div className="row py-5 ">
        <div className="col-md-3 border-top m-0 p-0" data-aos="zoom-in-up">
          <img src="../../assets/images/breakfast-1.jpg" className="w-100" alt srcSet />
        </div>
        <div className="col-md-3 d-flex align-items-center border-top m-0  " data-aos="zoom-in-up">
          <div className="menumeal ">
            <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
            <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
            <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
          </div>
        </div>
        <div className="col-md-3 border-top m-0 p-0" data-aos="zoom-in-up">
          <img src="../../assets/images/breakfast-9.jpg" className="w-100" alt srcSet />
        </div>
        <div className="col-md-3 d-flex align-items-center  border-top border-right m-0   " data-aos="zoom-in-up">
          <div className="menumeal ">
            <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
            <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
            <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
          </div>
        </div>
        <div className="col-md-3 d-flex align-items-center border-top border-left " data-aos="zoom-in-up">
          <div className="menumeal ">
            <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
            <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
            <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
          </div>
        </div>
        <div className="col-md-3 border-top m-0 p-0" data-aos="zoom-in-up">
          <img src="../../assets/images/breakfast-3.jpg" className="w-100" alt srcSet />
        </div>
        <div className="col-md-3 d-flex align-items-center m-0  " data-aos="zoom-in-up">
          <div className="menumeal ">
            <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
            <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
            <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
          </div>
        </div>
        <div className="col-md-3 p-0 m-0 " data-aos="zoom-in-up">
          <img src="../../assets/images/breakfast-5.jpg" className="w-100" alt srcSet />
        </div>
        <div className="col-md-3 border-top m-0 p-0" data-aos="zoom-in-up">
          <img src="../../assets/images/breakfast-6.jpg" className="w-100" alt srcSet />
        </div>
        <div className="col-md-3 d-flex align-items-center border-top border-bottom  m-0  " data-aos="zoom-in-up">
          <div className="menumeal ">
            <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
            <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
            <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
          </div>
        </div>
        <div className="col-md-3 border-top m-0 p-0" data-aos="zoom-in-up">
          <img src="../../assets/images/breakfast-2.jpg" className="w-100" alt srcSet />
        </div>
        <div className="col-md-3 d-flex align-items-center  border-top border-right border-bottom m-0   " data-aos="zoom-in-up">
          <div className="menumeal ">
            <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
            <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
            <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="chef py-5">
    <div className="heading  justify-content-center" data-aos="zoom-in-up">
      <h3 className="mb-2">Chef </h3>
      <h2> Our Master Chef</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-3 mt-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={1000}>
          <img src="../../assets/images/chef-4.jpg" className="w-100" alt srcSet />
          <div className="chefdata">
            <h2>John Smooth</h2>
            <p>Restaurant Owner</p>
            <a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a>
            <a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
            <a href="#"><i className="fab fa-google-plus-g" aria-hidden="true" /></a>
            <a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a>
          </div>
        </div>
        <div className="col-md-3 mt-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={1000}>
          <img src="../../assets/images/chef-2.jpg" className="w-100" alt srcSet />
          <div className="chefdata">
            <h2>Rebeca Welson</h2>
            <p>Head Chef</p>
            <a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a>
            <a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
            <a href="#"><i className="fab fa-google-plus-g" aria-hidden="true" /></a>
            <a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a>
          </div>
        </div>
        <div className="col-md-3 mt-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={1000}>
          <img src="../../assets/images/chef-3.jpg" className="w-100" alt srcSet />
          <div className="chefdata">
            <h2>Kharl Branyt</h2>
            <p>Chef</p>
            <a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a>
            <a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
            <a href="#"><i className="fab fa-google-plus-g" aria-hidden="true" /></a>
            <a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a>
          </div>
        </div>
        <div className="col-md-3 mt-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={1000}>
          <img src="../../assets/images/chef-1.jpg" className="w-100" alt srcSet />
          <div className="chefdata">
            <h2>Luke Simon</h2>
            <p>Chef</p>
            <a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a>
            <a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
            <a href="#"><i className="fab fa-google-plus-g" aria-hidden="true" /></a>
            <a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="reservation my-5">
    <div className="container">
      <div className="row">
        <div className="col-md-8 bg-white my-5 mx-2 p-5">
          <div className="heading  justify-content-center" data-aos="zoom-in-up">
            <h3 className="mb-2">Book a table </h3>
            <h2> Make Reservation</h2>
          </div>
          <div className="row ">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor>Name</label>
                <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Your Name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor>Email</label>
                <input type="email" className="form-control" name id aria-describedby="helpId" placeholder="Your Email" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor>Phone</label>
                <input type="tel" className="form-control" name id aria-describedby="helpId" placeholder="Phone" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor>Date</label>
                <input type="date" className="form-control" name id aria-describedby="helpId" placeholder="Date" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor>Time</label>
                <input type="time" className="form-control" name id aria-describedby="helpId" placeholder="Time" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor>Person</label>
                <select className="form-control" name id>
                  <option>Person</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>+4</option>
                </select>
              </div>
            </div>
            <div className="text-center mt-4 w-100">
              <button type="button" className="btn btn-outline-success p-2 ">Make A Reservation</button>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </section>
  <section className=" pt-5">
    <div className="heading  justify-content-center" data-aos="zoom-in-up">
      <h3 className="mb-2">Testimony </h3>
      <h2> Happy Customer</h2>
    </div>
    <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <div className="container py-5 mb-4">
            <div className="row text-center">
              <div className="col-md-4 customer ">
                <img src="../../assets/images/person_1.jpg" className="  w-50 rounded-circle align-center" alt="..." />
                <div className="text-center py-3">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <h5>Mark Stevenson</h5>
                  <span>customer</span>
                </div>
              </div>
              <div className="col-md-4 customer d-md-block d-none ">
                <img src="../../assets/images/person_2.jpg" className="  w-50 rounded-circle align-center" alt="..." />
                <div className="text-center py-3">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <h5>Mark Stevenson</h5>
                  <span>customer</span>
                </div>
              </div>
              <div className="col-md-4 customer  d-md-block d-none">
                <img src="../../assets/images/person_3.jpg" className="  w-50 rounded-circle align-center" alt="..." />
                <div className="text-center py-3">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <h5>Mark Stevenson</h5>
                  <span>customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container  ">
            <div className="row text-center">
              <div className="col-md-4  customer ">
                <img src="../../assets/images/person_4.jpg" className="  w-50 rounded-circle align-center" alt="..." />
                <div className="text-center py-3  ">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <h5>Mark Stevenson</h5>
                  <span>customer</span>
                </div>
              </div>
              <div className="col-md-4  customer d-md-block d-none">
                <img src="../../assets/images/person_1.jpg" className="  w-50 rounded-circle align-center" alt="..." />
                <div className="text-center py-3  d-md-block d-sm-none">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <h5>Mark Stevenson</h5>
                  <span>customer</span>
                </div>
              </div>
              <div className="col-md-4  customer d-md-block d-none ">
                <img src="../../assets/images/person_3.jpg" className="  w-50 rounded-circle align-center" alt="..." />
                <div className="text-center py-3 d-md-block d-none">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <h5>Mark Stevenson</h5>
                  <span>customer</span>
                </div>
              </div>
            </div>
          </div>   
        </div>
        <div className="carousel-item">
          <div className="container  ">
            <div className="row text-center">
              <div className="col-md-4 customer ">
                <img src="../../assets/images/person_2.jpg" className="  w-50 rounded-circle align-center" alt="..." />
                <div className="text-center py-3">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <h5>Mark Stevenson</h5>
                  <span>customer</span>
                </div>
              </div>
              <div className="col-md-4 customer d-md-block d-none ">
                <img src="../../assets/images/person_2.jpg" className="  w-50 rounded-circle align-center" alt="..." />
                <div className="text-center py-3">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <h5>Mark Stevenson</h5>
                  <span>customer</span>
                </div>
              </div>
              <div className="col-md-4 customer d-md-block d-none ">
                <img src="../../assets/images/person_3.jpg" className="  w-50 rounded-circle align-center" alt="..." />
                <div className="text-center py-3">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <h5>Mark Stevenson</h5>
                  <span>customer</span>
                </div>
              </div>
            </div>
          </div>     
        </div>
      </div>
      <a className="carousel-control-prev  " href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true" />
        <span className="sr-only ">Previous</span>
      </a>
      <a className="carousel-control-next " href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon bg-dark" aria-hidden="true" />
        <span className="sr-only bg-dark">Next</span>
      </a>
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
