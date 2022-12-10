import React from 'react';
import "../App";


const Slider = () => {
  return (
    <>
      <section className="home" id="home">

        <div className="row">

          <div className="content">
            <h3>Giảm giá đến 75%</h3>
            <p>Chào mừng bạn đến với BookCity !!! Mong bạn có một trải nghiệm tuyệt vời !!!</p>
            <a href="#" className="btn">Tham gia ngay</a>
          </div>

          <div className="swiper books-slider">
            <div className="swiper-wrapper">
              <a href="#" className="swiper-slide"><img src="./image/book-1.png" alt=""></img></a>
              <a href="#" className="swiper-slide"><img src="./image/book-2.png" alt=""></img></a>
              <a href="#" className="swiper-slide"><img src="./image/book-3.png" alt=""></img></a>
              <a href="#" className="swiper-slide"><img src="./image/book-4.png" alt=""></img></a>
              <a href="#" className="swiper-slide"><img src="./image/book-5.png" alt=""></img></a>
              <a href="#" className="swiper-slide"><img src="./image/book-6.png" alt=""></img></a>
            </div>
            <img src="./image/stand.png" className="stand" alt=""></img>
          </div>

        </div>
      </section>
    </>
  )
}

export default Slider;