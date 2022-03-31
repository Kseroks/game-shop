import React from 'react'
import "./game-buy.css";
import Button from '../button/button';
const GameBuy = ({ game }) => {
	return (
		<div className="game-buy">
			<span className="game-buy__price">{game.price} руб.</span>
			<Button
				type="primary"
				onClick={() => null} >
				В Корзину</Button>
		</div>
	)
}

export default GameBuy;