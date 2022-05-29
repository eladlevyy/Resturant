import React from 'react'

export default function Stories() {
    return (
        <div>
        <div>
  <header>
    <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
      <div className="carousel-inner  ">
        <div className="carousel-item active">
          <div className="overlay">
          </div>
          <img src="../assets/images/bg_4.jpg" className="d-block w-100 h-100 " alt="..." />
          <div className="carousel-caption  d-md-block" data-aos="fade-up">
            <p className="font-weight-bold mypagehead">Blog</p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent text-white d-flex justify-content-center" data-aos="fade-up">
                <li className="breadcrumb-item text-white"><a routerlink="../home" className="text-white text-decoration-none">HOME</a> </li>
                <li className="breadcrumb-item active text-white" aria-current="page">BLOG</li>
              </ol>
            </nav>
          </div>
        </div>  
      </div>
      <app-nav />
    </div>
  </header>  
  <section className="blog py-5">
    <div className="heading  justify-content-center" data-aos="zoom-in-up">
      <h3 className="mb-2">Blog </h3>
      <h2> Recent Posts</h2>
    </div>
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4 blogcontainer mb-3" data-aos="fade-right">
          <div className="blogimg">
            <a href="#"><img src="../../assets/images/image_1.jpg" className="w-100  h-100" alt srcSet /></a>
          </div>
          <div className="blogdata py-3 bg-white px-3">
            <p className="p-0 my-1"> Sept. 06, 2019<span>Admin</span></p>
            <h3>Taste the delicious foods in<br /> Asia</h3>
            <div className="d-flex justify-content-lg-between py-2">
              <a href="#">  <span>Read more... </span> </a><a href="#"> <i className="fas fa-comment-alt">&nbsp; 3</i></a>  
            </div>
          </div>
        </div>
        <div className="col-md-4 blogcontainer  mb-3" data-aos="zoom-in-up">
          <div className="blogimg">
            <a href="#"><img src="../../assets/images/image_2.jpg" className="w-100 h-100" alt srcSet /></a>
          </div>
          <div className="blogdata py-3 bg-white px-3">
            <p className="p-0 my-1"> Sept. 06, 2019<span>Admin</span></p>
            <h3>Taste the delicious foods in<br /> Asia</h3>
            <div className="d-flex justify-content-lg-between py-2">
              <a href="#">  <span>Read more... </span> </a><a href="#"> <i className="fas fa-comment-alt">&nbsp; 3</i></a>  
            </div>
          </div>
        </div>
        <div className="col-md-4 blogcontainer  mb-3" data-aos="fade-left">
          <div className="blogimg">
            <a href="#"><img src="../../assets/images/image_3.jpg" className="w-100  h-100" alt srcSet /></a>
          </div>
          <div className="blogdata py-3 bg-white px-3">
            <p className="p-0 my-1"> Sept. 06, 2019<span>Admin</span></p>
            <h3>Taste the delicious foods in<br /> Asia</h3>
            <div className="d-flex justify-content-lg-between py-2">
              <a href="#">  <span>Read more... </span> </a><a href="#"> <i className="fas fa-comment-alt">&nbsp; 3</i></a>  
            </div>
          </div>
        </div>
        <div className="col-md-4 blogcontainer mb-3" data-aos="fade-right">
          <div className="blogimg">
            <a href="#"><img src="../../assets/images/image_4.jpg" className="w-100  h-100" alt srcSet /></a>
          </div>
          <div className="blogdata py-3 bg-white px-3">
            <p className="p-0 my-1"> Sept. 06, 2019<span>Admin</span></p>
            <h3>Taste the delicious foods in<br /> Asia</h3>
            <div className="d-flex justify-content-lg-between py-2">
              <a href="#">  <span>Read more... </span> </a><a href="#"> <i className="fas fa-comment-alt">&nbsp; 3</i></a>  
            </div>
          </div>
        </div>
        <div className="col-md-4 blogcontainer  mb-3" data-aos="zoom-in-up">
          <div className="blogimg">
            <a href="#"><img src="../../assets/images/image_5.jpg" className="w-100 h-100" alt srcSet /></a>
          </div>
          <div className="blogdata py-3 bg-white px-3">
            <p className="p-0 my-1"> Sept. 06, 2019<span>Admin</span></p>
            <h3>Taste the delicious foods in<br /> Asia</h3>
            <div className="d-flex justify-content-lg-between py-2">
              <a href="#">  <span>Read more... </span> </a><a href="#"> <i className="fas fa-comment-alt">&nbsp; 3</i></a>  
            </div>
          </div>
        </div>
        <div className="col-md-4 blogcontainer  mb-3" data-aos="fade-left">
          <div className="blogimg">
            <a href="#"><img src="../../assets/images/image_6.jpg" className="w-100  h-100" alt srcSet /></a>
          </div>
          <div className="blogdata py-3 bg-white px-3">
            <p className="p-0 my-1"> Sept. 06, 2019<span>Admin</span></p>
            <h3>Taste the delicious foods in<br /> Asia</h3>
            <div className="d-flex justify-content-lg-between py-2">
              <a href="#">  <span>Read more... </span> </a><a href="#"> <i className="fas fa-comment-alt">&nbsp; 3</i></a>  
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
