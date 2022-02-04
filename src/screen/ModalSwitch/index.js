import React from 'react'
import { Switch, Route, useLocation } from "react-router-dom"
import NumberOne from '../NumberOne'
import NumberTwo from '../NumberTwo'
import NumberThree from '../NumberThree'
import NumberFour from '../NumberFour'
import Home from '../Home'
import Test from "../Test"

const ModalSwitch = () => {
    const location = useLocation()
    return (
        <div>
            <Switch location={location}>
                <Route exact path="/" children={<Home />} />
                <Route path="/home" children={<Home />} />
                <Route path="/number-one" children={<NumberOne />} />
                <Route path="/number-two" children={<NumberTwo />} />
                <Route path="/number-three" children={<NumberThree />} />
                <Route path="/number-four" children={<NumberFour />} />
                <Route path="/test" children={<Test />} />
            </Switch>
        </div>
    )
}

export default ModalSwitch
