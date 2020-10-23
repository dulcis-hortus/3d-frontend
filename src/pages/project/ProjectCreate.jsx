import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { CgAsterisk } from "react-icons/cg";
import { FaAsterisk } from "react-icons/fa";

// const Input = ({kind}) => {
//     return (
//         <>
//             <Form.Label htmlFor={kind}>{kind}</Form.Label>
//             <Form.Control type="text" placeholder={{kind} + "를 입력하세요" } id={kind} />
//         </>
//     );
// }


// const Seletion = ({kind, option1, option2, option3}) => {
//     return (
//         <>
//             <label htmlFor={kind}>{kind}</label>
//             <select id={kind}>
//                 <option>{option1}</option>
//                 <option>{option2}</option>
//                 <option>{option3}</option>
//             </select>
//         </>
//     );
// }

const ProjectCreate = () => {
    const handleSubmit = () => {
        // TODO
        // 1. validation
        // 2. Create API 연동 
    }

    const onClickCancel = () => {
        window.location.href = '/';
    }
    return (
        <>
            {/* <Form action="url" method="post">
                <Input kind="제목" />
                <Input kind="장소" />
                <Seletion 
                    kind="진행 방식"
                    option1="오프라인"
                    option2="온라인"
                    option3="둘 다"
                />
                <Seletion 
                    kind="모집 인원"
                    option1="3명 이하"
                    option2="3~8명"
                    option3="8명 이상"
                />
                <Input kind="진행 방식" />
                <Input kind="내용" />
            </Form>
            <button>CANCEL</button>
            <button type="submit">SUBMIT</button> */}
            <Row style={{ justifyContent: 'center' }}>
                <h2 className="form-title">사이드 프로젝트 팀 생성</h2>
            </Row>
            <Row style={{ justifyContent: 'center' }}><p className="form-description">팀 생성을 위한 정보를 입력해 주세요.</p></Row>
            <hr className="form-hr" />

            <Form style={{ width: '500px', margin: 'auto' }} onSubmit={handleSubmit} >
                        <Form.Group controlId="title">
                            <Form.Label className="form-label">제목<CgAsterisk className="form-required" /></Form.Label>
                            <Form.Control required placeholder="ex) '우리동네 맛집' 앱 개발 같이 해요!" />
                        </Form.Group>
                        <Form.Group controlId="region">
                            <Form.Label className="form-label">지역<CgAsterisk className="form-required" /></Form.Label>
                            <Form.Control required placeholder="ex) 서울 서초" />
                        </Form.Group>
                <Row>
                <Col sm={4}>
                        <Form.Group controlId="region">
                            <Form.Label className="form-label">모임 방식<CgAsterisk className="form-required" /></Form.Label>
                            <Form.Control required as="select">
                                <option>온라인</option>
                                <option>오프라인</option>
                                <option>둘 다</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group controlId="title">
                            <Form.Label className="form-label">팀장<CgAsterisk className="form-required" /></Form.Label>
                            <Form.Control required placeholder="ex) 김코딩" />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group controlId="region">
                            <Form.Label className="form-label">모집인원<CgAsterisk className="form-required" /></Form.Label>
                            <Form.Control required as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="description">
                    <Form.Label className="form-label">설명<CgAsterisk className="form-required" /></Form.Label>
                    <Form.Control required as="textarea" style={{ resize : 'none'}} rows={3} placeholder="ex) 동네 맛집을 공유하는 어플입니다."/>
                </Form.Group>
                <Row style={{ justifyContent: 'center', marginTop: '60px' }}>
                    <Button type="submit" className="form-button" style={{ backgroundColor: 'pink', borderColor: 'pink' }}>
                        생성
  </Button>
                    <Button variant="secondary" onClick={onClickCancel} style={{ marginLeft: '10px' }} className="form-button">
                        취소
  </Button>

                </Row>

            </Form>
        </>
    );
};

export default ProjectCreate;