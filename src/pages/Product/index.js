/* Core */
import React, {Component} from 'react';
import api from '../../services/Api'

import {Container, Title, Desc, Link} from './styles';

export default class Product extends Component {

	state = {
		product:{},
	}

	async componentDidMount(){

		const {id} = this.props.match.params

		const response = await api.get(`/products/show/${id}`)

		console.log(response.data)
		
		this.setState({product: response.data})

	}

  render() {

  	const { product } = this.state
    
    return (
    
	    <Container>
	    
	    	<Title>{product.title}</Title>
	    	<Desc>{product.description}</Desc>

	    	Url: <Link href ={product.url} target = '_blank'>{product.url}</Link>

	    </Container>
    
    )
  }
}
