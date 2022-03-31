import React from 'react'
import "./card-block.css";
import { TiShoppingCart } from "react-icons/ti";
const CardBlock = () => {
	return (
		<div className="card-block">
			<TiShoppingCart size={25} className="card-block__icon" />
			<span className="card-block__total-price">2333 руб.</span>
		</div>
	)
}
export default CardBlock;