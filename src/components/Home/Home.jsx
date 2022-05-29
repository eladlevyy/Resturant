import React from 'react'
import './homestyle.css';
import bg_1 from '../../assets/images/bg_1.jpg';
import breakfast from '../../assets/images/breakfast-1.jpg';
import breakfast2 from '../../assets/images/breakfast-2.jpg';
import breakfast3 from '../../assets/images/breakfast-3.jpg';
import breakfast4 from '../../assets/images/breakfast-4.jpg';
import Navbar from '../Navbar/Navbar';


export default function Home() {
    return (
        <div>

{/* start header */}
<header>
<div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
    <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
        <li data-target="#carouselExampleCaptions" data-slide-to={2} />
    </ol>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="overlay">
            </div>
            <img src={bg_1} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption  d-md-block">
                <div data-aos="fade-up">
                    <p>Feliciano</p>
                    <h1>Best Restaurant </h1>
                </div>
                <div className="meals py-1 d-none d-md-block ">
                    <div>
                        <div className="row">
                            <div className="col-md-3 text-center " data-aos="zoom-in-up" data-aos-delay={400}>
                                <img src={breakfast} className="w-25 rounded-circle" alt srcSet />
                                <h2 className="pt-3">Grilled Beef with potatoes</h2>
                                <h6>Meat, Potatoes, Rice, Tomatoe</h6>
                            </div>
                            <div className="col-md-3 text-center  " data-aos="zoom-in-up" data-aos-delay={400}>
                                <img src={breakfast2} className="w-25 rounded-circle" alt srcSet />
                                <h2 className="pt-3">Grilled Beef with potatoes</h2>
                                <h6>Meat, Potatoes, Rice, Tomatoe</h6>
                            </div>
                            <div className="col-md-3 text-center " data-aos="zoom-in-up" data-aos-delay={400}>
                                <img src={breakfast3} className="w-25 rounded-circle" alt srcSet />
                                <h2 className="pt-3">Grilled Beef with potatoes</h2>
                                <h6>Meat, Potatoes, Rice, Tomatoe</h6>
                            </div>
                            <div className="col-md-3 text-center " data-aos="zoom-in-up" data-aos-delay={400}>
                                <img src={breakfast4} className="w-25 rounded-circle" alt srcSet />
                                <h2 className="pt-3">Grilled Beef with potatoes</h2>
                                <h6>Meat, Potatoes, Rice, Tomatoe</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-item ">
            <div className="overlay">
            </div>


            <img src={require('../../assets/images/bg_2.jpg')} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption  d-md-block">
                <p>Feliciano</p>
                <h1>Grilled Beef with potatoes </h1>
                <div className="meals py-1 d-none d-md-block ">
                    <div>
                        <div className="row">
                            <div className="col-md-3 text-center ">
                                <img src={require('../../assets/images/breakfast-4.jpg')} className="w-25 rounded-circle" alt srcSet />
                                <h2 className="pt-3">Grilled Beef with potatoes</h2>
                                <h6>Meat, Potatoes, Rice, Tomatoe</h6>
                            </div>
                            <div className="col-md-3 text-center ">
                                <img src={require('../../assets/images/breakfast-5.jpg')} className="w-25 rounded-circle" alt srcSet />
                                <h2 className="pt-3">Grilled Beef with potatoes</h2>
                                <h6>Meat, Potatoes, Rice, Tomatoe</h6>
                            </div>
                            <div className="col-md-3 text-center ">
                                <img src={require('../../assets/images/breakfast-6.jpg')} className="w-25 rounded-circle" alt srcSet />
                                <h2 className="pt-3">Grilled Beef with potatoes</h2>
                                <h6>Meat, Potatoes, Rice, Tomatoe</h6>
                            </div>
                            <div className="col-md-3 text-center ">
                                <img src={require('../../assets/images/breakfast-7.jpg')} className="w-25 rounded-circle" alt srcSet />
                                <h2 className="pt-3">Grilled Beef with potatoes</h2>
                                <h6>Meat, Potatoes, Rice, Tomatoe</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="overlay">
            </div>
            <img src={require('../../assets/images/bg_3.jpg')} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption  d-md-block">
                <p>Feliciano</p>
                <h1 className="mb-4">Delicious Specialties</h1>
                <div className="meals py-1 d-none d-md-block ">
                    <div>
                        <div className="row">
                            <div className="col-md-3 text-center ">
                                <img src={require('../../assets/images/breakfast-8.jpg')} className="w-25 rounded-circle" alt srcSet />
                                <h2 className="pt-3">Grilled Beef with potatoes</h2>
                                <h6>Meat, Potatoes, Rice, Tomatoe</h6>
                            </div>
                            <div className="col-md-3 text-center ">
                                <img src={require('../../assets/images/breakfast-9.jpg')} className="w-25 rounded-circle" alt srcSet />
                                <h2 className="pt-3">Grilled Beef with potatoes</h2>
                                <h6>Meat, Potatoes, Rice, Tomatoe</h6>
                            </div>
                            <div className="col-md-3 text-center ">
                                <img src={require('../../assets/images/breakfast-2.jpg')} className="w-25 rounded-circle" alt srcSet />
                                <h2 className="pt-3">Grilled Beef with potatoes</h2>
                                <h6>Meat, Potatoes, Rice, Tomatoe</h6>
                            </div>
                            <div className="col-md-3 text-center ">
                                <img src={require('../../assets/images/breakfast-1.jpg')} className="w-25 rounded-circle" alt srcSet />
                                <h2 className="pt-3">Grilled Beef with potatoes</h2>
                                <h6>Meat, Potatoes, Rice, Tomatoe</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
    </a>
    <Navbar />
</div>
</header>



{/* start about */}
<section class="py-5 mytop">

    <div class="container" data-aos="zoom-in-up">
        <div class="row">
            <div class="col-md-3 about m-2">
            </div>
            <div class="col-md-3 about2 m-2 mt-5">
            </div>
            <div class="col-md-5">

                <div class="heading  " data-aos="zoom-in-up">
                    <h3 >About</h3>
                    <h2 >Feliciano Restaurant</h2>
                </div>
                <div>

                    <p class="text-muted aboutdata">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <p class="text-muted">Mon - Fri <span class="font-weight-bold text-dark"> 8 AM - 11 PM</span></p>
                    <p class="number">+ 1-978-123-4567</p>
                </div>

            </div>
        </div>
    </div>

</section>



{/* start rate */}
<section class="rate py-5 text-center">

  <div class="container">
        <div class="row">
            <div class="col-md-2" data-aos="zoom-in-up">
                <span>18</span>
                <h2 class="text-muted">Years of Experienced</h2>

            </div>

            <div class="col-md-2" data-aos="zoom-in-up">
                <span>100</span>
                <h2>Menus/Dish</h2>
            </div>

            <div class="col-md-2" data-aos="zoom-in-up">
                <span>50</span>
                <h2 >Staffs</h2>
            </div>

            <div class="col-md-3" data-aos="zoom-in-up">
                <span>15.000</span>
                <h2>Happy Customers</h2>
            </div>

            <div class="col-md-3 ratedata" data-aos="zoom-in-up">
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </div>
        </div>
    </div>

</section>



{/* start service */}
<section class="py-5 services">

    <div class="heading  justify-content-center" data-aos="zoom-in-up">
        <h3 class="mb-2" >Services </h3>
        <h2 > Catering Services</h2>
    </div>

    <div class="container " data-aos="zoom-in" data-aos-duration="1000">
        <div class="row text-center py-3">

            <div class="col-md-4">
                <i class="fas fa-birthday-cake"></i>
                <h3 class="py-2 font-weight-bold">Birthday Party</h3>
                <p class="text-muted">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>

            <div class="col-md-4">
                <i class="fas fa-handshake"></i>
                <h3 class="py-2 font-weight-bold">Business Meetings</h3>
                <p class="text-muted">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>


            <div class="col-md-4">
                <i class="fas fa-glass-cheers"></i>
                <h3 class="py-2 font-weight-bold">Wedding Party</h3>
                <p class="text-muted">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>



        </div>
    </div>
</section>



{/* start menu */}
<section className="menu py-5">
        <div className="heading  justify-content-center"  data-aos="zoom-in-up">
            <h3 className="mb-2" >Specialties </h3>
            <h2 > Our Menu</h2>
        </div>

  <div className="container" >
        <div className="row py-5 ">

          <div className="col-md-3 border-top m-0 p-0"  data-aos="zoom-in-up">
            <img src="../../assets/images/breakfast-1.jpg" className="w-100"alt="" srcset=""/>
          </div>

          <div className="col-md-3 d-flex align-items-center border-top m-0  "  data-aos="zoom-in-up">
            <div className="menumeal " >
              <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span >$29</span></h2> 
              <h6  >Meat, Potatoes, Rice,<br/> Tomatoe</h6>
              <button type="button" className="btn btn-outline-success mt-3" >Order Now</button>
            </div>
          </div>

          <div className="col-md-3 border-top m-0 p-0"  data-aos="zoom-in-up">
            <img src="../../assets/images/breakfast-9.jpg" className="w-100"alt="" srcset=""/>
          </div>
          
          <div className="col-md-3 d-flex align-items-center  border-top border-right m-0   "  data-aos="zoom-in-up">
            <div className="menumeal " >
              <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
              <h6  >Meat, Potatoes, Rice,<br/> Tomatoe</h6>
              <button type="button" className="btn btn-outline-success mt-3" >Order Now</button>
            </div>
          </div>

          <div className="col-md-3 d-flex align-items-center border-top border-left "  data-aos="zoom-in-up">
            <div className="menumeal " >
              <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span >$29</span></h2> 
              <h6  >Meat, Potatoes, Rice,<br/> Tomatoe</h6>
              <button type="button" className="btn btn-outline-success mt-3" >Order Now</button>
            </div>
          </div>
          
          <div className="col-md-3 border-top m-0 p-0"  data-aos="zoom-in-up">
            <img src="../../assets/images/breakfast-3.jpg" className="w-100"alt="" srcset=""/>
          </div>


          <div className="col-md-3 d-flex align-items-center m-0  "  data-aos="zoom-in-up">
            <div className="menumeal " >
              <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span >$29</span></h2> 
              <h6  >Meat, Potatoes, Rice,<br/> Tomatoe</h6>
              <button type="button" className="btn btn-outline-success mt-3" >Order Now</button>
            </div>
          </div>
          
          <div className="col-md-3 p-0 m-0 "  data-aos="zoom-in-up">
            <img src="../../assets/images/breakfast-5.jpg" className="w-100"alt="" srcset=""/>
          </div>

          
          <div className="col-md-3 border-top m-0 p-0"  data-aos="zoom-in-up">
            <img src="../../assets/images/breakfast-6.jpg" className="w-100"alt="" srcset=""/>
          </div>

          <div className="col-md-3 d-flex align-items-center border-top border-bottom  m-0  "  data-aos="zoom-in-up">
            <div className="menumeal " >
              <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span >$29</span></h2> 
              <h6  >Meat, Potatoes, Rice,<br/> Tomatoe</h6>
              <button type="button" className="btn btn-outline-success mt-3" >Order Now</button>
            </div>
          </div>

          <div className="col-md-3 border-top m-0 p-0"  data-aos="zoom-in-up">
            <img src="../../assets/images/breakfast-2.jpg" className="w-100"alt="" srcset=""/>
          </div>
          
          <div className="col-md-3 d-flex align-items-center  border-top border-right border-bottom m-0   "  data-aos="zoom-in-up">
            <div className="menumeal " >
              <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
              <h6  >Meat, Potatoes, Rice,<br/> Tomatoe</h6>
              <button type="button" className="btn btn-outline-success mt-3" >Order Now</button>
            </div>
          </div>



        </div>
  </div>

</section>



{/* start chef */}
<section className="chef py-5">
  <div className="heading  justify-content-center" data-aos="zoom-in-up"  >
    <h3 className="mb-2" >Chef </h3>
    <h2 > Our Master Chef</h2>
  </div>


 <div className="container">
  <div className="row">
        <div className="col-md-3 mt-3" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
          <img src="../../assets/images/chef-4.jpg" className="w-100"alt="" srcset=""/>
          <div className="chefdata">
            <h2>John Smooth</h2>
            <p>Restaurant Owner</p>
            <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-google-plus-g" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className="col-md-3 mt-3"  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
          <img src="../../assets/images/chef-2.jpg" className="w-100"alt="" srcset=""/>
          <div className="chefdata">
            <h2>Rebeca Welson</h2>
            <p>Head Chef</p>
            <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-google-plus-g" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
          </div>
        </div>


        <div className="col-md-3 mt-3"  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
          <img src="../../assets/images/chef-3.jpg" className="w-100"alt="" srcset=""/>
          <div className="chefdata">
            <h2>Kharl Branyt</h2>
            <p>Chef</p>
            <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-google-plus-g" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className="col-md-3 mt-3"  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
          <img src="../../assets/images/chef-1.jpg" className="w-100"alt="" srcset=""/>
          <div className="chefdata">
            <h2>Luke Simon</h2>
            <p>Chef</p>
            <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-google-plus-g" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
          </div>
        </div>
  </div>
</div>


</section>



{/* start reservation */}
<section className="reservation my-5">

  <div className="container">
    <div class="row">
              <div className="col-md-8 bg-white my-5 mx-2 p-5">
                <div className="heading  justify-content-center" data-aos="zoom-in-up" data-aos-delay="500" >
                  <h3 className="mb-2" data-aos="zoom-in-up"  >Book a table </h3>
                  <h2 data-aos="zoom-in-up" > Make Reservation</h2>
              </div>

              <div className="row ">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="">Name</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Your Name"/>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label for="">Email</label>
                    <input type="email" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Your Email"/>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label for="">Phone</label>
                    <input type="tel" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Phone"/>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label for="">Date</label>
                    <input type="date" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Date"/>
                  </div>
                </div>

                
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="">Time</label>
                    <input type="time" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Time"/>
                  </div>
                </div>

                
                <div className="col-md-6">
                  
                    <div className="form-group">
                      <label for="">Person</label>
                      <select className="form-control" name="" id="">
                        <option>Person</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>+4</option>

                      </select>
                    </div>
                </div>
                <div className="text-center mt-4 w-100">
                  <button type="button" className="btn btn-outline-success p-2 reservationbtn">Make a Reservation</button>

                </div>

              </div>
              </div> 
     </div>
  </div>

  


</section>



<section className=" pt-5">
    <div className="heading  justify-content-center" data-aos="zoom-in-up" data-aos-delay="500">
      <h3 className="mb-2" >Testimony </h3>
      <h2 > Happy Customer</h2>
  </div>


  <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">

    <div className="carousel-inner ">
      <div className="carousel-item active">

                            <div className="container py-5 mb-4">
                              <div className="row text-center">
                                
                                <div className="col-md-4 customer ">
                                  <img src="../../assets/images/person_1.jpg" className="  w-50 rounded-circle align-center" alt=""/>
                                  <div className="text-center py-3">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <h5>Mark Stevenson</h5>
                                    <span>customer</span>
                                  </div>
                            
                                </div>
                            
                                <div className="col-md-4 customer d-md-block d-none ">
                                  <img src="../../assets/images/person_2.jpg" className="  w-50 rounded-circle align-center" alt=""/>
                                  <div className="text-center py-3">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <h5>Mark Stevenson</h5>
                                    <span>customer</span>
                                  </div>
                            
                                </div>
                            
                                <div className="col-md-4 customer  d-md-block d-none">
                                  <img src="../../assets/images/person_3.jpg" className="  w-50 rounded-circle align-center" alt=""/>
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
                <img src="../../assets/images/person_4.jpg" className="  w-50 rounded-circle align-center" alt=""/>
                <div className="text-center py-3  ">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <h5>Mark Stevenson</h5>
                  <span>customer</span>
                </div>
          
              </div>
          
              <div className="col-md-4  customer d-md-block d-none">
                <img src="../../assets/images/person_1.jpg" className="  w-50 rounded-circle align-center" alt=""/>
                <div className="text-center py-3  d-md-block d-sm-none">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <h5>Mark Stevenson</h5>
                  <span>customer</span>
                </div>
          
              </div>
          
              <div className="col-md-4  customer d-md-block d-none ">
                <img src="../../assets/images/person_3.jpg" className="  w-50 rounded-circle align-center" alt=""/>
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
                                    <img src="../../assets/images/person_2.jpg" className="  w-50 rounded-circle align-center" alt=""/>
                                    <div className="text-center py-3">
                                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                      <h5>Mark Stevenson</h5>
                                      <span>customer</span>
                                    </div>
                              
                                  </div>
                              
                                  <div className="col-md-4 customer d-md-block d-none ">
                                    <img src="../../assets/images/person_2.jpg" className="  w-50 rounded-circle align-center" alt=""/>
                                    <div className="text-center py-3">
                                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                      <h5>Mark Stevenson</h5>
                                      <span>customer</span>
                                    </div>
                              
                                  </div>
                              
                                  <div className="col-md-4 customer d-md-block d-none ">
                                    <img src="../../assets/images/person_3.jpg" className="  w-50 rounded-circle align-center" alt="..."/>
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
      <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
      <span className="sr-only ">Previous</span>
    </a>
    <a className="carousel-control-next " href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
      <span className="sr-only bg-dark">Next</span>
    </a>
  </div>

</section>

{/* start blog */}
<section className="blog py-5">

      <div className="heading  justify-content-center" data-aos="zoom-in-up" data-aos-delay="500">
        <h3 className="mb-2" >Blog </h3>
        <h2 > Recent Posts</h2>
      </div>

      <div className="container py-5">
        <div className="row">
                      <div className="col-md-4 blogcontainer mb-3"  data-aos="fade-right">
                        <div className="blogimg">
                          <a href="#"><img src="../../assets/images/image_1.jpg" className="w-100  h-100" alt="" srcset=""/></a>

                        </div>
                            <div className="blogdata py-3 bg-white px-3">
                                    <p className="p-0 my-1" > Sept. 06, 2019<span>Admin</span>  </p>
                                    <h3>Taste the delicious foods in<br/> Asia</h3>
                                    <div className="d-flex justify-content-lg-between py-2">
                                    <a href="#">  <span>Read more... </span> </a><a href="#"> <i className="fas fa-comment-alt">&nbsp; 3</i></a>  
                                  </div>
                          </div>
                      </div>
                 

                      <div className="col-md-4 blogcontainer  mb-3"  data-aos="zoom-in-up">
                        <div className="blogimg">
                          <a href="#"><img src="../../assets/images/image_6.jpg" className="w-100 h-100" alt="" srcset=""/></a>

                        </div>
                            <div className="blogdata py-3 bg-white px-3">
                                    <p className="p-0 my-1" > Sept. 06, 2019<span>Admin</span>  </p>
                                    <h3>Taste the delicious foods in<br/> Asia</h3>
                                    <div className="d-flex justify-content-lg-between py-2">
                                    <a href="#">  <span>Read more... </span> </a><a href="#"> <i className="fas fa-comment-alt">&nbsp; 3</i></a>  
                                  </div>
                          </div>
                      </div>
                 



                      <div className="col-md-4 blogcontainer  mb-3" data-aos="fade-left">
                        <div className="blogimg">
                          <a href="#"><img src="../../assets/images/image_3.jpg" className="w-100  h-100" alt="" srcset=""/></a>

                        </div>
                            <div className="blogdata py-3 bg-white px-3">
                                    <p className="p-0 my-1" > Sept. 06, 2019<span>Admin</span>  </p>
                                    <h3>Taste the delicious foods in<br/> Asia</h3>
                                    <div className="d-flex justify-content-lg-between py-2">
                                    <a href="#">  <span>Read more... </span> </a><a href="#"> <i className="fas fa-comment-alt">&nbsp; 3</i></a>  
                                  </div>
                          </div>
                      </div>
                 
        </div>
      </div>

</section>


{/* start footer */}
<footer className="py-5">
  <div className="container">
    
        <div className="row">
          
                        <div className="col-md-3  px-2 mt-2" data-aos="zoom-in-up"  data-aos-easing="ease-out-cubic"
                        data-aos-duration="900">
                          <h2 className="py-4" >Feliciano</h2>

                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                          <div className="social">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>

                        <div className="col-md-3  px-2 mt-2"  data-aos="zoom-in-up"  data-aos-easing="ease-out-cubic"
                        data-aos-duration="900">
                            <h2 className="py-4" >Open Hours</h2>
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

                        <div className="col-md-3 px-2 mt-2"  data-aos="zoom-in-up"  data-aos-easing="ease-out-cubic"
                        data-aos-duration="900">
                          <h2 className="py-4">Instagram</h2>
                          <div className="container">
                            <div className="row insta">
                              <div className="col-md-4 col-6  p-0 m-0 ">
                                <img src="../../assets/images/insta-1.jpg" className="w-100" alt="" srcset=""/>
                              </div>
                              <div className="col-md-4 col-6 p-0 m-0">
                                <img src="../../assets/images/insta-2.jpg" className="w-100" alt="" srcset=""/>
                              </div>
                              <div className="col-md-4 col-6 p-0 m-0">
                                <img src="../../assets/images/insta-3.jpg" className="w-100" alt="" srcset=""/>
                              </div>

                              <div className="col-md-4 col-6 p-0 m-0">
                                <img src="../../assets/images/insta-4.jpg" className="w-100" alt="" srcset=""/>
                              </div>
                              <div className="col-md-4  col-6 p-0 m-0">
                                <img src="../../assets/images/insta-5.jpg" className="w-100" alt="" srcset=""/>
                              </div>
                              <div className="col-md-4 col-6 p-0 m-0">
                                <img src="../../assets/images/insta-6.jpg" className="w-100" alt="" srcset=""/>
                              </div>
                              
                              
                              
                            </div>
                          </div>
                          
                          
                      </div>


                      <div className="col-md-3  px-2 mt-2"  data-aos="zoom-in-up"  data-aos-easing="ease-out-cubic"
                      data-aos-duration="900">
                        <h2 className="py-4" >Newsletter</h2>

                        <p>Far far away, behind the word mountains, far from the countries.</p>
                        <form >

                              <div className="form-group">
                                <input type="text" className="form-control myinput" name="" id="" aria-describedby="helpId" placeholder="Enter Email Address"/>
                              </div>
                              <div className="form-group">
                                <button type="button"  className="form-control " className="btn btn-primary">Subscribe</button>

                              </div>
                        </form>
                      </div>

                      <div className="col-12 text-center  py-5 mt-2"  data-aos="zoom-in-up"  data-aos-easing="ease-out-cubic"
                      data-aos-duration="900">
                        Copyright ©2021 All rights reserved | This template is made with by Mahmoud Hamdy
                      </div>


        </div>



  </div>


</footer>
 




        </div>
    )
}
