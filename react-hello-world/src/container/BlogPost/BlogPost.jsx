import React, { Component, Fragment } from 'react';
import Post from '../../component/Post/Post';
import './BLogPost.css';
import axios from 'axios';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

class BlogPost extends Component {

    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((res) => {
                // console.log(res)
                this.setState({
                    post: res.data
                })
            })
    }

    postDataToAPi = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
            .then((res) => {
                // console.log(res)
                this.getPostAPI();
                this.setState({
                    formBlogPost: {
                        id: 1,
                        title: "",
                        body: "",
                        userId: 1
                    },
                })
            })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
            .then((res) => {
                this.getPostAPI();
                this.setState({
                    isUpdate: false,
                    formBlogPost: {
                        id: 1,
                        title: "",
                        body: "",
                        userId: 1
                    },
                })
            })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then((res) => {
                this.getPostAPI();
            })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = { ...this.state.formBlogPost };

        let timestamp = new Date().getTime();

        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp;
        }

        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI();
        } else {
            this.postDataToAPi();
        }
    }

    handleUpdate = (data) => {
        // console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }


    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        this.getPostAPI();
    }

    render() {
        return (
            <Fragment>
                <p className='section-title'>Blog Post</p>
                <hr />
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' value={this.state.formBlogPost.title} placeholder='add title' onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="30" rows="10" placeholder='add blog content' onChange={this.handleFormChange}></textarea>
                    <button className='btn-submit' onClick={this.handleSubmit}>Simpan</button>

                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;