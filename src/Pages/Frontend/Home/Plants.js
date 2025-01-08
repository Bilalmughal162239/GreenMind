import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Col, Row, Typography } from 'antd'
import { Fade } from 'react-awesome-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Image } from 'antd'
import img from '../../../asset/Green Mind/Frame.c334b3548e3e7f3d3e6b.png'
import img1 from '../../../asset/Green Mind/Frame2.d9c4863124a8bdb9edf4.png'
import img2 from '../../../asset/Green Mind/Frame3.864ce8bf2f8461f44e66.png'
const { Title, Paragraph } = Typography
const Plants = () => {
    return (
        <main className='Plants'>
            <section className='py-sm-1 py-lg-4'>
                <Fade>
                    <Container className='pt-sm-3 pt-lg-5'>
                        <Row>
                            <Col span={24}>
                                <div className='h1 text-center' style={{ fontSize: "30px", fontWeight: "600" }} >
                                    Plants
                                </div>
                            </Col>
                        </Row>
                        <Row className='pt-3' gutter={[8, 8]}>
                            <Col xs={24} md={12} lg={10}>
                                <Title level={1} className='' style={{ fontSize: "30px", fontWeight: "bolder" }}>Best Selling Plants</Title>
                                <Paragraph className='fs-5'>Easiest way to healthy life by buying your <br /> favorite plants</Paragraph>
                                <Button type='primary px-3'>Search <FontAwesomeIcon icon={faArrowRight} /> </Button>
                            </Col>
                            <Col xs={24} md={12} lg={5}>
                                <div className='d-flex justify-content-center'>
                                    <Image preview={true} src={img} alt='Plant_Image1' className='img-fluid' width={"200px"} />
                                </div>
                            </Col>
                            <Col xs={24} md={12} lg={5}>
                                <div className='d-flex justify-content-center'>
                                    <Image preview={true} src={img1} alt='Plant_Image1' className='img-fluid' width={"200px"} />
                                </div>
                            </Col>
                            <Col xs={24} md={12} lg={5}>
                                <div className='d-flex justify-content-center'>
                                    <Image preview={true} src={img2} alt='Plant_Image1' className='img-fluid' width={"200px"} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Fade>
            </section>
        </main>
    )
}

export default Plants