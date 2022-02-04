import React from 'react'
import CardImage from '../../components/CardImage'
import { imageList } from "./dummy_imageList"
import { Row, Col } from "reactstrap"

const ImageList = (props) => {
    const renderItem = () => {
        return (
            imageList.map((item, index) => (
                <Col className="ms-3 " md="1" sm="1" xs="1" key={index}>
                    <CardImage item={item} />
                </Col>
            ))
        )
    }
    return (
        <div>
            <Row>
                {renderItem()}
            </Row>
        </div>
    )
}

export default ImageList
