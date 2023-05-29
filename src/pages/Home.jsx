import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroVideo1 from '../assets/img/video4.mp4'
import heroVideo2 from '../assets/img/video1.mp4'
import heroVideo3 from '../assets/img/video5.mp4'
import Subtitle from '../shared/Subtitle'
import item from '../assets/img/fork.png'
import experienceImg from '../assets/img/img17.jpeg'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedBookList from '../components/Featured-books/FeaturedBookList'
const Home = () => {
    return (
      <>
   <section>
        <Container>
          <Row>
            <Col lg='6'>
      <div className="hero_content">
        <div className="hero_subtitle d-flex align-items-center">
        <h3 className="services_subtitle"> Know before you go</h3>
          <img style={{width:'50px', height:'40px'}} src={item} alt="" />
        </div>
        <h1>Find your next hangout and meet cool <span className="highlight">People</span> </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
           laudantium eos omnis. Molestiae voluptate necessitatibus, voluptatem eligendi facere quaerat,
           consectetur possimus modi, dolorum nesciunt culpa dicta deleniti ipsum eum porro.</p>
      </div>
            </Col>
            <Col lg='2'>
      <div className="hero_img-box">
        <video controls src={heroVideo1} alt="" />
      </div>
            </Col>
            <Col lg='2'>
      <div className="hero_img-box mt-4">
        <video controls  src={heroVideo2}  alt="" />
      </div>
            </Col>
            <Col lg='2'>
      <div className="hero_img-box mt-5">
        <video controls src={heroVideo3} alt="" />
      </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
       </section>
       <section>
        <Container>
          <Row>
            <Col lg='3'>
      <h3 className="services_subtitle"> What we serve</h3>
      <h2 className="services_title">We offer our best services</h2>
            </Col>
            <ServiceList/> 
          </Row>
        </Container>
       </section>
       <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5' >
            <h5 className="services_subtitle"> Explore</h5>
            <h2 className="featured_book-title">
              Our Featured Events
            </h2>
            </Col>
            <FeaturedBookList/>
          </Row>
        </Container>
       </section>
       <section>
        <Container>
          <Row>
            <Col lg='6'>
      <div className="experience_content">
      <h3 className="services_subtitle"> Experience</h3>
        <h2>With our all experience <br /> we will serve you </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         <br />
        esse corporis sit, accusantium tenetur nisi alias id illum.
        </p>
        
      </div>
      <div className="counter-wrapper d-flex align-items-center gap-5">
        <div className="counter_box">
          <span>12K+</span>
          <h6>Successful Booking</h6>
        </div>
        <div className="counter_box">
          <span>10K+</span>
          <h6>Regular Client</h6>
        </div>  
        <div className="counter_box">
          <span>15K+</span>
          <h6>Year's Experience</h6>
        </div>
      </div>
            </Col>
            <Col lg='6'>
              <div className="experience_img">
                <img  src={experienceImg} alt="" />
              </div>
              </Col>
          </Row>
        </Container>
       </section>
       
      
      </>
      
    )
}

export default Home
