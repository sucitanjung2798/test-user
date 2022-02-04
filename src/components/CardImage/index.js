import React from 'react'
import { Card } from "reactstrap"

const CardImage = (props) => {
    const { item } = props
    return (
        <div {...props} index={item.id}>
            <img className="image-list" src={item.image} width={"80px"} />
        </div>
    )
}

export default CardImage;
