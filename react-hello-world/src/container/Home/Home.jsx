import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import BlogPost from '../BlogPost/BlogPost';
import LifeCycleComp from '../LIfeCycleComp/LIfeCycleComp';
import Product from '../Product/Product';

import './Home.css';

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
    }


    render() {
        return (
            <BrowserRouter>
                <div className='navigation'>
                    <Link to="/">Home</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">Life Cycle</Link>

                </div>
                <Routes>
                    <Route path="/" exact element={<BlogPost />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/lifecycle" element={<LifeCycleComp />} />
                </Routes>
            </BrowserRouter >
        )
    }
}

export default Home;