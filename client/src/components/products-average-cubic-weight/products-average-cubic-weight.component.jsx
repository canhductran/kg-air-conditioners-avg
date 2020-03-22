import React from 'react';
import axios from 'axios';

class ProductsAverageCubicWeightComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            averageCubicWeight: 0.0,
            errorMessage: null,
        }
    }

    componentDidMount() {
        this.getAverageCubicWeight();
    }

    getAverageCubicWeight() {
        axios.request({
            method: 'GET',
            url: 'http://localhost:3030/api/products/averagecubicweight',
            params: {
                category: this.props.category
            }
        }).then((res) => {
            let averageCubicWeight = 0.0;

            if (res.data) {
                averageCubicWeight = res.data
            }

            this.setState({
                averageCubicWeight: averageCubicWeight,
                errorMessage: null
            });
        }).catch((err) => {
            let errorMessage;

            if (err.response) {
                errorMessage = err.response.data.error;
            }

            if (!errorMessage) {
                errorMessage = 'An unexpected error happened. Please try again.';
            }

            this.setState({
                averageCubicWeight: 0.0,
                errorMessage: errorMessage
            });

            console.log("API call unsucessfull");
        });
    }

    render() {
        const { category } = this.props;
        const { averageCubicWeight, errorMessage } = this.state;

        let message;

        if (errorMessage) {
            message = `Cannot find the Average Cubic Weight of Products with Category '${category}'. Error: ${errorMessage}`;
        } else {
            message = `The Average Cubic Weight of Products with Category '${category}' is ${averageCubicWeight}`;
        }
        return (
            <h2>{message}</h2>
        )
    }
}

export default ProductsAverageCubicWeightComponent;
