import React from 'react'
import { Row, Col, Button, Input } from "reactstrap"
import Sandwich from "./../../assets/sandwich.jpeg"
import Rating from "./../../assets/rating.png"
import Navbar from '../NavBar'
import Categories from '../Categories'
import RecentBlogPost from '../../components/RecentBlogPost'
import ImageList from '../ImageList'

const NumberFour = () => {
    return (
        <div className="display-number-four">
            <div className="card-display">
                <Row>
                    <Col md="9">
                        <div class="d-flex">
                            <div class="flex-shrink-0">
                                <img
                                    src={Sandwich}
                                    alt="Sandwich"
                                    width={"400px"}
                                    height={"325px"}
                                    className="gambar"
                                />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <div class="d-flex align-items-start flex-column bd-highlight mb-3">
                                    <div class="px-2 bd-highlight color-orange font-weight">
                                        $14.70
                                    </div>
                                    <div class="px-2 bd-highlight font-weight font-size">
                                        Applo Recipe Apps
                                    </div>
                                    <div class="px-2 bd-highlight">
                                        <div class="d-flex flex-row bd-highlight mb-3">
                                            <div class="p-0 margin-right">
                                                <img src={Rating} width={"90px"} />
                                            </div>
                                            <div class="p-0 rating margin-right">4.5</div>
                                            <div class="width-border margin-right"></div>
                                            <div class="p-0 rating">35 Reviews</div>
                                        </div>
                                    </div>
                                    <div class="px-2 bd-highlight desc mb-3">
                                        Summer is the best time to stock up on lightweight bras keep cool. If yout relaxing at home slip on a the recipe has been completly finished dude.
                                    </div>
                                    <div class="px-2 bd-highlight desc">
                                        <div className="title-right">
                                            Offline Version
                                        </div>
                                        <div className="d-flex container-radio-button">
                                            <label>
                                                <input type="radio" name="One" checked />
                                                <span></span>
                                            </label>
                                            <label>
                                                <input type="radio" name="One" />
                                                <span></span>
                                            </label>
                                        </div>

                                    </div>
                                    <div class="px-2 bd-highlight desc">
                                        <div className="title-right">
                                            Quantity
                                        </div>
                                        <div class="d-flex flex-row bd-highlight mb-3">
                                            <div class="p-0 margin-right">
                                                <Input value={2} className="mt-2 input-size" />
                                            </div>
                                            <Button className="margin-button">Add To Cart</Button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <ImageList />
                        <div>
                            <Navbar />
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="mb-4">
                            <p className="categories">Categories</p>
                            <Categories />
                        </div>
                        <div>
                            <p className="categories">Recent Blog Post</p>
                            <RecentBlogPost />
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default NumberFour
