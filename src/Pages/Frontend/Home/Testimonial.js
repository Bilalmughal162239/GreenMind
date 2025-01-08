import React from 'react'
import { Col, Row} from 'antd'
import { Container } from 'react-bootstrap'


import img from '../../../asset/Green Mind/caroual.png'
const Testimonial = () => {

    return (
        <main className='Testimonial'>
            <section className='py-5'>
                <Container>
                    <Row>
                        <Col span={24}>
                            <div id="carouselExample" className="carousel slide mx-auto w-75">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={img} className="d-block img-fluid" alt="Carousel_images" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img} className="d-block img-fluid" alt="Carousel_images" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img} className="d-block img-fluid" alt="Carousel_images" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Testimonial