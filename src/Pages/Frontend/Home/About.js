import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import { Container } from 'react-bootstrap'

import img from '../../../asset/Green Mind/Frame4.png'
import img1 from '../../../asset/Green Mind/Frame5.png'
import img2 from '../../../asset/Green Mind/Frame6.png'
const { Title } = Typography
const About = () => {
  return (
    <main className='About'>
      <section>
        <Container>
          <Row>
            <Col span={24}>
              <Title level={1}>
                <div className=' text-center ps-2' style={{ fontSize: "30px", fontWeight: "600" }} > About Us</div>
              </Title>
            </Col>
          </Row>
          <Row>
            <Col sm={24} md={12} lg={8} >
              <Card>
                <div id='About_Card' className='text-center d-flex justify-content-centee py-4 px-4'>
                  <img src={img} alt="Img_About" className='img-fluid' />
                </div>
              </Card>
            </Col>
            <Col sm={24} md={12} lg={8} >
              <Card>
                <div id='About_Card' className='text-center d-flex justify-content-centee py-4 px-4'>
                  <img src={img1} alt="Img_About" className='img-fluid' />
                </div>
              </Card>
            </Col>
            <Col sm={24} md={12} lg={8} >
              <Card>
                <div id='About_Card' className='text-center d-flex justify-content-centee py-4 px-4'>
                  <img src={img2} alt="Img_About" className='img-fluid' />
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default About