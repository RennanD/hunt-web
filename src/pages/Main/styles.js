import styled from 'styled-components'

export const Container = styled.div`
	max-width: 700px;
	margin: 20px auto 0;
	padding: 0 20px;

`
export const List = styled.article`
	backgroud: #FFF;
	border: 1px solid #DDD;
	border-radius: 5px;
	padding: 20px;
	margin-bottom: 20px;


`

export const Title = styled.strong`
	

`

export const Desc =  styled.p`
	font-size: 16px;
	color: #999;
	margin-top: 5px;
	line-height: 24px;
`
export const Link = styled.a`
	height: 42px;
	border-radius 5px;
	border: 1px solid #da552f;
	background: none;
	margin-top: 10px;
	color: #da552f;
	font-size: 16px;
	font-weight: bold;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s;

	&:hover {
		background: #da552f;
		color: #FFF;
	}

`

export const Actions = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`

export const Button = styled.button`
	padding: 10px;
	border-radius: 5px;
	border:0;
	background #da552f;
	color: #FFF;
	font-size: 16px;
	font-weight:bold;
	cursor: pointer;

	&:hover{
		opacity: 0.7;
	}

	&:disabled {
		opacity:0.5;
		cursor: not-allowed;
	}
`


