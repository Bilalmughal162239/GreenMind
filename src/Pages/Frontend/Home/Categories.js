import { Col, Image, Row, Typography } from 'antd'
import React from 'react'
import { Container,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from '../../../asset/Green Mind/Frame7.e38be52bdd6aa2c3d357.png'
import img1 from '../../../asset/Green Mind/Frame8.c4601f707884d66cd1f4.png'
import img2 from '../../../asset/Green Mind/Frame9.129b6381fd75cde5eed9.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const { Paragraph } = Typography
const Categories = () => {
    return (
        <main className='Categories'>
            <section className='py-5'>
                <Container className='pt-sm-2 pt-lg-4'>
                    <Row>
                        <Col span={24} className='text-cetner'>
                            <div className='text-center' style={{ fontSize: "30px", fontWeight: "600" }} >  Categories </div>
                            <Paragraph className='text-center'>Find what you are looking for</Paragraph>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='Image py-3'>
                <Container>
                    <Row gutter={[5, 5]}>
                        <Col xs={24} md={12} lg={8}>
                            <div className='d-flex justify-content-center'>
                                <Image preview={true} src={img} className='img-fluid' alt='Catergory_Image' width={"300px"} />
                            </div>
                        </Col>
                        <Col xs={24} md={12} lg={8}>
                            <div className='mt-sm-1 mt-lg-5 d-flex justify-content-center'>
                                <Image preview={true} src={img1} className='img-fluid' alt='Catergory_Image' width={"300px"} />
                            </div>
                        </Col>
                        <Col xs={24} md={12} lg={8}>
                            <div className='d-flex justify-content-center'>
                                <Image preview={true} src={img2} className='img-fluid' alt='Catergory_Image' width={"300px"} />
                            </div>
                        </Col>
                    </Row>
                    <Row className='pt-4'>
                        <Col span={24} className='text-center'>
                        <Button type='primary'>Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Categories