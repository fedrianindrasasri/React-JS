import React, { Component } from 'react';
import BlogPost from '../BlogPost/BlogPost';
// import YoutubeComp from '../../component/YoutubeComponent/YoutubeCom';
import LifeCycleComp from '../LIfeCycleComp/LIfeCycleComp';
// import Product from '../Product/Product';
// 
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
            <div>
                {/* <p>Youtube Component</p>
                <hr />
                <YoutubeComp time="1.02" title="Tutorial React JS 1" desc="Upload 14 Hari yang lalu" />
                <YoutubeComp time="3.02" title="Tutorial React JS 2" desc="Upload 14 Hari yang lalu" />
                <YoutubeComp time="5.02" title="Tutorial React JS 3" desc="Upload 14 Hari yang lalu" />
                <YoutubeComp /> */}

                {/* <p>Counter</p>
                <hr />
                <Product /> */}

                {/* <p>Life Cycle Component</p>
                <hr />

                {this.state.showComponent ? <LifeCycleComp /> : null} */}

                <p>Blog Post</p>
                <hr />
                <BlogPost />

            </div>
        )
    }
}

export default Home;