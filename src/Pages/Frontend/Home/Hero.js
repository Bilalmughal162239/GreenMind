import { Col, Row, Typography } from 'antd'
import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from '../../../asset/Green Mind/Group.bf5a762781805f21f9b5.png'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const { Title, Paragraph } = Typography
const Hero = () => {
  return (
    <main className='Hero pt-5 mt-3'>
      <section className='mt-sm-2 mt-lg-3'>
        <Container id='Hero_section' className='px-4 pt-4'>
          <Row>
            <Col xs={24} lg={12}>
              <Title level={1} className='Heading1 pb-0'>
                Buy your <br />
                dream plants
              </Title>
              <Paragraph className='h3'>
                50+ <br />
                Plant Species
              </Paragraph>
              <form id='Hero_Form'>
                <input type="search" placeholder='Search Here' id='Hero_input' />
                <button type='submit' id='Hero_Button' ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
              </form>
            </Col>
            <Col xs={24} lg={12}>
              <div>
                <img src={img} className='img-fluid' alt="Hero_Image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default Hero