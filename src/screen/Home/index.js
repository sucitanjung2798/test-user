import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="display">
            <div>
                <div className="p-2 bd-highlight link-design">
                    <Link to="/number-one">Soal No 1</Link>
                </div>
                <div className="p-2 bd-highlight link-design">
                    <Link to="/number-two">Soal No 2</Link>
                </div>
                <div className="p-2 bd-highlight link-design">
                    <Link to="/number-three">Soal No 3</Link>
                </div>
                <div className="p-2 bd-highlight link-design">
                    <Link to="/number-four">Soal No 4</Link>
                </div>
            </div>

        </div>
    )
}

export default Home
