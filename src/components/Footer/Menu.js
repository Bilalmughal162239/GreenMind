import { Col, Row } from 'antd'
import React from 'react'
import { Container } from 'react-bootstrap'

const Menu = () => {
    const year = new Date().getFullYear()
  return (
    <footer>
        <Container>
            <Row>
                <Col span={24}>
                <div className='text_Footer text-center py-2 fs-6'>
                    .{year} all Right Reserved Term of use GREENMIND
                </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Menu