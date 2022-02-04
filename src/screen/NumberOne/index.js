import React, { useEffect } from 'react'
import CardArray from '../../components/CardArray';
import { Row, Col } from "reactstrap"

const Array1 = [
    ["A", "B", "C", "D"],
    ["E", "F", "G", "H"],
];

const Array2 = [
    ["I", "J"],
    ["K", "L"],
    ["M", "N"]
]

const Array3 = [...Array1, ...Array2]

const NumberOne = () => {
    const renderItem = () => {
        return (
            Array3.map((item, index) => {
                return (
                    <div>
                        {item.map((subItems, sIndex) => {
                            return (
                                <Col className="ms-3 border-grid" md="1" sm="1" xs="1" key={index}>
                                    <CardArray subItems={subItems} />
                                </Col>
                            );
                        })}
                    </div>


                );
            })
        )
    }
    return (
        <div className="grid-number-one">
            <Row>
                {renderItem()}
            </Row>
        </div>
    )
}

export default NumberOne
