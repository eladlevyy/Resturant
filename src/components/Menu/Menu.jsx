import React from 'react'
import './menustyle.css';

export default function Menu() {
    return (
        <div>
   <div>
  <header>
    <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
      <div className="carousel-inner  ">
        <div className="carousel-item active">
          <div className="overlay">
          </div>
          <img src="../assets/images/bg_5.jpg" className="d-block w-100 h-100" alt="..." />
          <div className="carousel-caption  d-md-block" data-aos="fade-up">
            <p className="font-weight-bold mypagehead">Specialties</p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent text-white d-flex justify-content-center" data-aos="fade-up">
                <li className="breadcrumb-item text-white"><a routerlink="../home" className="text-white text-decoration-none">HOME</a> </li>
                <li className="breadcrumb-item active text-white" aria-current="page">MENU</li>
              </ol>
            </nav>
          </div>
        </div>  
      </div>
      <app-nav />
    </div>
  </header>  
  <section className="menu py-5">
    <div className="heading  justify-content-center" data-aos="zoom-in-up">
      <h3 className="mb-2">Specialties </h3>
      <h2> Our Menu</h2>
    </div>
    <ul className="nav nav-pills mb-3  justify-content-center" id="pills-tab" role="tablist" data-aos="zoom-in-up">
      <li className="nav-item">
        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Breakfast</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Lunch</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Dinner</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-drinks" role="tab" aria-controls="pills-drinks" aria-selected="false">Drinks</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-desserts" role="tab" aria-controls="pills-desserts" aria-selected="false">Desserts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-wine" role="tab" aria-controls="pills-wine" aria-selected="false">Wine</a>
      </li>
    </ul>
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <div className="container">
          <div className="row py-5 ">
            <div className="col-md-3 border-top m-0 p-0" data-aos="zoom-in-up">
              <img src="../../assets/images/breakfast-9.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center border-top m-0  " data-aos="zoom-in-up">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0" data-aos="zoom-in-up">
              <img src="../../assets/images/breakfast-2.jpg" className="w-100" alt srcSet />
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
              <img src="../../assets/images/breakfast-4.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 border-top m-0 p-0" data-aos="zoom-in-up">
              <img src="../../assets/images/breakfast-5.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center border-top border-bottom  m-0  " data-aos="zoom-in-up">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0" data-aos="zoom-in-up">
              <img src="../../assets/images/breakfast-6.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center  border-top border-right border-bottom m-0   " data-aos="zoom-in-up">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center m-0 border-bottom border-left  " data-aos="zoom-in-up">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 p-0 m-0 " data-aos="zoom-in-up">
              <img src="../../assets/images/breakfast-7.jpg" className="w-100 h-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center m-0    border-bottom " data-aos="zoom-in-up">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 p-0 m-0 " data-aos="zoom-in-up">
              <img src="../../assets/images/breakfast-8.jpg" className="w-100" alt srcSet />
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <div className="container">
          <div className="row py-5 ">
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/lunch-1.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center border-top m-0  " data-aos="zoom-in-up">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/lunch-2.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center  border-top border-right m-0   ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center border-top border-left ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/lunch-3.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center m-0  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 p-0 m-0 ">
              <img src="../../assets/images/lunch-4.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/lunch-5.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center border-top border-bottom  m-0  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/lunch-6.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center  border-top border-right border-bottom m-0   ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center m-0 border-bottom border-left  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 p-0 m-0 ">
              <img src="../../assets/images/lunch-7.jpg" className="w-100 h-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center m-0    border-bottom ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 p-0 m-0 ">
              <img src="../../assets/images/lunch-8.jpg" className="w-100" alt srcSet />
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
        <div className="container">
          <div className="row py-5 ">
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/dinner-1.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center border-top m-0  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/dinner-2.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center  border-top border-right m-0   ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center border-top border-left ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/dinner-3.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center m-0  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 p-0 m-0 ">
              <img src="../../assets/images/dinner-4.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/dinner-5.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center border-top border-bottom  m-0  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/dinner-6.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center  border-top border-right border-bottom m-0   ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-drinks" role="tabpanel" aria-labelledby="pills-drinks-tab">
        <div className="container">
          <div className="row py-5 ">
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/drink-1.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center border-top m-0  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/drink-2.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center  border-top border-right m-0   ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center border-top border-left ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/drink-3.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center m-0  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 p-0 m-0 ">
              <img src="../../assets/images/drink-4.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/drink-5.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center border-top border-bottom  m-0  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/drink-6.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center  border-top border-right border-bottom m-0   ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-desserts" role="tabpanel" aria-labelledby="pills-desserts-tab">
        <div className="container">
          <div className="row py-5 ">
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/dessert-1.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center border-top m-0  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/dessert-2.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center  border-top border-right m-0   ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center border-top border-left ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/dessert-3.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center m-0  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 p-0 m-0 ">
              <img src="../../assets/images/dessert-4.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/dessert-5.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center border-top border-bottom  m-0  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/dessert-6.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center  border-top border-right border-bottom m-0   ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-wine" role="tabpanel" aria-labelledby="pills-wine-tab">
        <div className="container">
          <div className="row py-5 ">
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/wine-1.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center border-top m-0  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/wine-2.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center  border-top border-right m-0   ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center border-top border-left ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/wine-3.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center m-0  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 p-0 m-0 ">
              <img src="../../assets/images/wine-4.jpg" className="w-100 h-100" alt srcSet />
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/wine-5.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center border-top border-bottom  m-0  ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/wine-6.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center  border-top border-right border-bottom m-0   ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center  border-top border-right border-bottom m-0   ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/wine-7.jpg" className="w-100" alt srcSet />
            </div>
            <div className="col-md-3 d-flex align-items-center  border-top border-right border-bottom m-0   ">
              <div className="menumeal ">
                <h2 className="pt-3 font-weight-bold">Grilled Beef with potatoes <span>$29</span></h2> 
                <h6>Meat, Potatoes, Rice,<br /> Tomatoe</h6>
                <button type="button" className="btn btn-outline-success mt-3">Order Now</button>
              </div>
            </div>
            <div className="col-md-3 border-top m-0 p-0">
              <img src="../../assets/images/wine-8.jpg" className="w-100 h-100" alt srcSet />
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
