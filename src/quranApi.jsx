import React, { Component } from 'react';
import axios from 'axios';

class QuranApi extends Component {
    state = {
        text: ''
    }
    async componentDidMount() {
        const response = await axios.get('http://api.alquran.cloud/v1/ayah/2:255/en.asad');
        this.setState({ text: response.data.data.text});
    }

    render() { 
        return ( this.state.text );
    }
}
 
export default QuranApi;