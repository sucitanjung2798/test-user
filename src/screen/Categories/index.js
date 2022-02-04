import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap'
import Accordion from './../../components/Accordion'
import { categoriesList } from './dummy_categoriesList';
const Categories = (props) => {


    const renderItem = () => {
        return (
            categoriesList.map((item, index) =>
            (
                <Accordion item={item} />
            )
            )
        )
    }
    return (
        <Container>
            {renderItem()}
        </Container>
    );
}


export default Categories;