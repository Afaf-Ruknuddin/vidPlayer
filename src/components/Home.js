import React from 'react'
import homeImg from '../images/home-vid.jpg'
import homeImg2 from '../images/header-1.jpg'
import homeImg3 from '../images/homeImg3.jpg'
import VideoPlayer from './VideoPlayer'

const home = () => {
    return (
        <>
        
        <div className=" container-fluid home-main d-flex">
        <div className="row bg-light m-auto justify-content-center d-flex">
        <div className='text-home col-sm-10 col-md-5 h-text text-center m-auto'>
            <h1 className='home-h1'> this is a <span className='home-span'>video streaming</span> site</h1>
            <p className='home-p'>live streaming video  may be the most powerful, yet most untapped, digital resource education has ever seen.</p>
        </div>
        <div className=" col-sm-10 col-md-5 home-img m-2">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={homeImg} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={homeImg2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={homeImg3} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
        </div>
        </div>

        <VideoPlayer/>
        </>
    )
}

export default home
