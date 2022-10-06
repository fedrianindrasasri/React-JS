import React, { Component } from 'react';
// import './Product.css'

class CardProduct extends Component {
    state = {
        order: 4
    }

    handlePlus = () => {
        // alert('Plus Button')
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }

    handleMinus = () => {
        // alert('Minus Button')
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }


    render() {
        return (
            <div className='card'>
                <div className='img-thumb-prod'>
                    <img src="https://cdn.brilio.net/news/2019/10/11/172121/1110168-1000xauto-20-resep-masakan-ayam-paling-enak.jpg" alt="" />
                </div>
                <p className='product-title'>Daging Ayam Berbumbu</p>
                <p className='product-price'>Rp 100,000</p>
                <div className='counter'>
                    <button className='minus' onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className='plus' onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct;