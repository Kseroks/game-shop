
import React from 'react'
import { Link } from "react-router-dom";
import CardBlock from "../card-block/card-block";
import "./header.css";
const Header = () => {
	return (
		<div className="header">
			<div className="wrapper">
				<Link to="/" className="header_store-title">
					Game Store
				</Link>
			</div>
			<div className="wrapper header__card-btn-wrapper">
				<CardBlock />
			</div>
		</div>
	)
}

export default Header;