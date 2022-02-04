import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Accordion(props) {
    const { item } = props
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (

        <div className="mt-2">
            <div onClick={toggle} className="d-flex text-dark list-categories" >
                <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} className="icon" />
                <p>{item.header}</p>
            </div>

            <Collapse isOpen={isOpen} className="w-100">
                <Card className="p-2 rounded-0">
                    <CardBody>
                        {item.content}
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}

export default Accordion