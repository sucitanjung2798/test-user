import React, { useState, useEffect } from 'react'
import { Col, Row, Input } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.css";

const data = [
    [12, 65, 58],
    [25, 82, 56],
    [54, 86, 68],
    [55, 47, 58]
]

const NumberTwo = (props) => {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div>
            {data.length === 0 ? <p>Tidak Ditemukan</p> : (
                <div className="display-flex-grid margin-grid">
                    {data.map((items, index) => {
                        return (
                            <div>
                                {items.filter((items) => {
                                    if (searchTerm === "") {
                                        return items
                                    } else if (items.toString().includes(searchTerm.toString())) {
                                        return items
                                    }
                                }).map((subItems, sIndex) => {
                                    return (
                                        <Row>
                                            <Col md="auto" className="border-grid">
                                                {subItems}
                                            </Col>

                                        </Row>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            )}

            <div className="input-group">
                <Input
                    type="text"
                    placeholder="Search...."
                    onChange={(ev) => {
                        setSearchTerm(ev.target.value);
                    }}
                    value={searchTerm}
                />
            </div>
        </div>
    )
}

export default NumberTwo
