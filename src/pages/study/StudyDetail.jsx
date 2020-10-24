import React, { useState } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';


const StudyDetail = () => {

    const [show, setShow] = useState(false);
    const [status, setStatus] = useState('모집중');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleApply = () => {

    }

    const goMain = () => {
        window.location.href = '/';
    }

    return (
        <>
            <Row style={{ justifyContent: 'center' }}>
                <h2 className="form-title">스터디 조회</h2>
            </Row>
            <hr className="form-hr" />
            <Form style={{ width: '500px', margin: 'auto' }}>

                <Form.Group controlId="title">
                    <Form.Label className="form-label">제목</Form.Label>
                    <Form.Control plaintext readOnly defaultValue="앵귤러 스터디 모집해요" />

                </Form.Group>
                <Form.Group controlId="status">
                    <Form.Label className="form-label">상태</Form.Label>
                    <Form.Control plaintext readOnly defaultValue={status} />

                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label className="form-label">주제</Form.Label>
                    <Form.Control plaintext readOnly defaultValue="앵귤러" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group controlId="region">
                            <Form.Label className="form-label">지역</Form.Label>
                            <Form.Control plaintext readOnly defaultValue="경기" >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="number">
                            <Form.Label className="form-label">모집인원</Form.Label>
                            <Form.Control plaintext readOnly defaultValue="3" >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="content">
                    <Form.Label className="form-label">내용</Form.Label>
                    <Form.Control plaintext readOnly defaultValue="평일에 앵귤러 스터디 하실분 구해요!" />

                </Form.Group>
                <Row style={{ justifyContent: 'center', marginTop: '60px' }}>
                    {status === '모집중' && <Button onClick={handleShow} className="form-button" style={{ backgroundColor: '#80AAA6', borderColor: '#80AAA6' }}>
                        지원하기
  </Button>}
                    <Button onClick={goMain} className="form-button" style={{ backgroundColor: '#D7CDC2', borderColor: '#D7CDC2', marginLeft: '10px' }}>
                        메인으로
  </Button>

                </Row>

            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='modal-title'>스터디 지원</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ fontSize: '13px' }}>[앵귤러 스터디 모집해요] 스터디 관리자에게 전송할 메시지를 입력해 주세요.
                <Form.Group controlId="content" style={{ marginTop: '10px' }}>
                        <Form.Control as="textarea" aria-describedby="contentHelpBlock" rows={3} />

                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="form-button" style={{ width: '100px', backgroundColor: '#D7CDC2', borderColor: '#D7CDC2', marginLeft: '10px' }} onClick={handleClose}>
                        취소
          </Button>
                    <Button className="form-button" style={{ width: '100px', backgroundColor: '#80AAA6', borderColor: '#80AAA6' }} onClick={handleApply}>
                        지원하기
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default StudyDetail;