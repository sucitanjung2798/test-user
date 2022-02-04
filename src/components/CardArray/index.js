import React from 'react'

const CardArray = (props) => {
    const { subItems } = props
    return (
        <div {...props} index={subItems.id}>
            <div class="p-2 bd-highlight">{subItems}</div>
        </div>
    )
}

export default CardArray
