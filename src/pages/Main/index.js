import React, { Component } from 'react'
import api from '../../services/Api'
import {Link} from 'react-router-dom'

import { 
	Container,
	Title,
	List,
	Desc,
	Actions,
	Button 
} from './styles'



export default class Main extends Component {
	
	state = {
		products: [],
		productInfo: {},
		page: 1,
	}

	componentDidMount() {

		this.loadProducts()
	}

	loadProducts = async (page = 1) =>{
		const response = await api.get(`/products?page=${page}`) 

		const { docs, ...productInfo} = response.data

		this.setState({products: docs, productInfo, page})
	}

	prevPage = () =>{
		const { page, productInfo} = this.state

		if(page === 1){
			return
		}

		const pageNumber = page - 1

		this.loadProducts(pageNumber)
	}

	nextPage = () =>{
		const { page, productInfo} = this.state
		if (page === productInfo.pages) {
			return
		}

		const pageNumber = page + 1

		this.loadProducts(pageNumber)
	}

	render(){
		const {products, page, productInfo} = this.state
		return(
		
			<Container>
				
				{products.map(product => (
					<List key = {product._id}>
						<Title>{product.title}</Title>

						<Desc>{product.description}</Desc>
						
						<p><Link to = {`/products/${product._id}`}>Visitar</Link></p>
					</List>
				))}
				<Actions>
					<Button disabled = {page === 1} onClick={this.prevPage}>Anterior</Button>
					<Button disabled = {page === productInfo.pages} onClick={this.nextPage}>Próximo</Button>
				</Actions>
			</Container>
		
		)
	}
}
